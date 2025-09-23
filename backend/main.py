# app.py
import enum
import secrets
import random
from datetime import datetime, timedelta

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

# ---------------- Config ----------------
app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

# IMPORTANT: change for production and use env vars
app.config["SECRET_KEY"] = "your_secret_key_here"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Mail config (replace with your SMTP settings; consider environment vars)
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = "srms.inventory@gmail.com"
app.config["MAIL_PASSWORD"] = "ilslkasxuyqcqnke"
app.config["MAIL_DEFAULT_SENDER"] = "srms.inventory@gmail.com"
db = SQLAlchemy(app)
mail = Mail(app)

# ---------------- Models ----------------
class YesNo(enum.Enum):
    YES = "yes"
    NO = "no"

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(15), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    address = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(20), nullable=False)

    # Session tracking
    login_status = db.Column(db.Boolean, default=False, nullable=False)
    login_token = db.Column(db.String(64), nullable=True, unique=True)

    # Optional fields
    weight = db.Column(db.Float, nullable=True)
    allergy = db.Column(db.String(200), nullable=True)
    height = db.Column(db.Float, nullable=True)
    blood_group = db.Column(db.String(10), nullable=True)
    weak_eyes = db.Column(db.String(50), nullable=True)
    emergency_contact = db.Column(db.String(15), nullable=True)
    doctor_phone = db.Column(db.String(15), nullable=True)
    firebase_token = db.Column(db.String(300), nullable=True)

class TempUser(db.Model):
    __tablename__ = "temp_user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(15), unique=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)  # hashed
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(20), nullable=False)

    weight = db.Column(db.Float, nullable=True)
    allergy = db.Column(db.String(200), nullable=True)
    height = db.Column(db.Float, nullable=True)
    blood_group = db.Column(db.String(10), nullable=True)
    weak_eyes = db.Column(db.String(50), nullable=True)
    emergency_contact = db.Column(db.String(15), nullable=True)
    doctor_phone = db.Column(db.String(15), nullable=True)
    firebase_token = db.Column(db.String(300), nullable=True)

    otp_hash = db.Column(db.String(200), nullable=False)
    slug = db.Column(db.String(80), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

class YesNo(enum.Enum):
    YES = "yes"
    NO = "no"

class HealthReminders(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey("user.id"))
    title = db.Column(db.String, nullable=False)
    time = db.Column(db.Date, nullable=False)
    switch = db.Column(db.Enum(YesNo), nullable=False, default=YesNo.YES )


class BeforeAfter(enum.Enum):
    BEFORE = "before"
    AFTER = "after"
    NA = "na"

class MedReminders(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey("user.id"))
    med = db.Column(db.String, nullable=False)
    dosage = db.Column(db.String, nullable=False)
    Schedule = db.Column(db.Enum(BeforeAfter), nullable=False, default=BeforeAfter.NA)
    time = db.Column(db.Date, nullable=False)
# ---------------- Helpers ----------------
def send_verification_email(email: str, slug: str, otp: int):
    """Send a verification email containing the link (slug) and OTP."""
    # Frontend route where user will enter OTP after clicking link
    # Example link: http://localhost:5173/verify/<slug>
    link = f"http://localhost:5173/verify/{slug}"
    msg = Message("Verify your account", recipients=[email])
    msg.body = (
        f"Welcome!\n\nClick the link to verify your account:\n\n{link}\n\n"
        f"Your OTP is: {otp}\nThis OTP is valid for 15 minutes.\n\n"
        "If you did not request this, ignore this email."
    )
    mail.send(msg)

def generate_token_16hex() -> str:
    """Generate a 16-hex-character token (secure)."""
    return secrets.token_hex(8)  # 8 bytes -> 16 hex chars

def get_user_by_token(token: str):
    if not token:
        return None
    return User.query.filter_by(login_token=token).first()

def auth_required(func):
    """Decorator to protect endpoints with token auth."""
    from functools import wraps
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = None
        # token can come from header or JSON body
        if "X-Auth-Token" in request.headers:
            token = request.headers.get("X-Auth-Token")
        else:
            json_data = request.get_json(silent=True) or {}
            token = json_data.get("token") or json_data.get("login_token")

        user = get_user_by_token(token)
        if not user or not user.login_status:
            return jsonify({"error": "Unauthorized or invalid token"}), 401

        # attach user to request context for convenience
        request.current_user = user
        return func(*args, **kwargs)
    return wrapper

# ---------------- Routes ----------------
@app.route("/signup", methods=["POST"])
def signup():
    """
    Expected JSON:
    {
      "name": "...",
      "phone": "...",
      "email": "...",
      "address": "...",
      "password": "...",
      "age": 20,
      "gender": "male",
      "includeMedical": true/false,
      "weight": 70, "allergies":"", ...
      "fb_token": "optional"
    }
    """
    data = request.get_json()
    if not data:
        return jsonify({"error": "Missing JSON body"}), 400

    required = ["name", "phone", "email", "address", "password", "age", "gender"]
    for k in required:
        if k not in data:
            return jsonify({"error": f"Missing field {k}"}), 400

    # check if already registered in main User table
    if User.query.filter((User.email == data["email"]) | (User.phone == data["phone"])).first():
        return jsonify({"error": "User already registered"}), 400

    # generate OTP + slug
    otp = random.randint(100000, 999999)
    slug = secrets.token_urlsafe(24)
    otp_hash = generate_password_hash(str(otp))
    hashed_password = generate_password_hash(data["password"])
    include_med = bool(data.get("includeMedical"))

    # check if exists in TempUser
    temp_user = TempUser.query.filter(
        (TempUser.email == data["email"]) | (TempUser.phone == data["phone"])
    ).first()

    if temp_user:
        # update existing TempUser
        temp_user.name = data["name"]
        temp_user.phone = data["phone"]
        temp_user.email = data["email"]
        temp_user.address = data["address"]
        temp_user.password = hashed_password
        temp_user.age = data["age"]
        temp_user.gender = data["gender"]
        temp_user.firebase_token = data.get("fb_token")
        temp_user.otp_hash = otp_hash
        temp_user.slug = slug
        temp_user.created_at = datetime.utcnow()

        if include_med:
            temp_user.weight = data.get("weight")
            temp_user.allergy = data.get("allergies") or data.get("allergy")
            temp_user.height = data.get("height")
            temp_user.blood_group = data.get("blood")
            temp_user.weak_eyes = data.get("vision")
            temp_user.emergency_contact = data.get("emergency")
            temp_user.doctor_phone = data.get("doctor")
        else:
            temp_user.weight = None
            temp_user.allergy = None
            temp_user.height = None
            temp_user.blood_group = None
            temp_user.weak_eyes = None
            temp_user.emergency_contact = None
            temp_user.doctor_phone = None
    else:
        # create new TempUser
        temp_user = TempUser(
            name=data["name"],
            phone=data["phone"],
            email=data["email"],
            address=data["address"],
            password=hashed_password,
            age=data["age"],
            gender=data["gender"],
            firebase_token=data.get("fb_token"),
            otp_hash=otp_hash,
            slug=slug,
            created_at=datetime.utcnow()
        )

        if include_med:
            temp_user.weight = data.get("weight")
            temp_user.allergy = data.get("allergies") or data.get("allergy")
            temp_user.height = data.get("height")
            temp_user.blood_group = data.get("blood")
            temp_user.weak_eyes = data.get("vision")
            temp_user.emergency_contact = data.get("emergency")
            temp_user.doctor_phone = data.get("doctor")

        db.session.add(temp_user)

    db.session.commit()

    # send verification email
    try:
        send_verification_email(data["email"], slug, otp)
    except Exception as e:
        db.session.delete(temp_user)
        db.session.commit()
        return jsonify({"error": "Failed to send email", "detail": str(e)}), 500

    return jsonify({"message": "OTP & verification link sent to email"}), 201

@app.route("/verify/<slug>", methods=["POST"])
def verify(slug):
    """
    POST body: {"otp": 123456}
    Frontend flow:
    - user clicks link (frontend route /verify/<slug>)
    - frontend asks user to input OTP (which was also emailed)
    - frontend calls POST /verify/<slug> with otp
    """
    data = request.get_json()
    if not data or "otp" not in data:
        return jsonify({"error": "OTP required"}), 400

    otp = str(data["otp"])
    temp_user = TempUser.query.filter_by(slug=slug).first()
    if not temp_user:
        return jsonify({"error": "Invalid or expired verification link"}), 404

    # check expiry 15 minutes
    if datetime.utcnow() > temp_user.created_at + timedelta(minutes=15):
        # cleanup
        db.session.delete(temp_user)
        db.session.commit()
        return jsonify({"error": "OTP expired. Please register again."}), 400

    # check OTP
    if not check_password_hash(temp_user.otp_hash, otp):
        return jsonify({"error": "Invalid OTP"}), 400

    # move to main User table
    new_user = User(
        name=temp_user.name,
        phone=temp_user.phone,
        email=temp_user.email,
        address=temp_user.address,
        password=temp_user.password,  # already hashed
        age=temp_user.age,
        gender=temp_user.gender,
        weight=temp_user.weight,
        allergy=temp_user.allergy,
        height=temp_user.height,
        blood_group=temp_user.blood_group,
        weak_eyes=temp_user.weak_eyes,
        emergency_contact=temp_user.emergency_contact,
        doctor_phone=temp_user.doctor_phone,
        firebase_token=temp_user.firebase_token,
    )

    db.session.add(new_user)
    db.session.delete(temp_user)
    db.session.commit()

    return jsonify({"message": "Account verified and registered successfully"}), 200

@app.route("/login", methods=["POST"])
def login():
    """
    Expected JSON: {"email": "...", "password": "...", "firebase_token": optional}
    Behavior:
    - If credentials invalid -> 401
    - If login_status True -> 403 (already logged in)
    - If OK -> generate 16-hex token, store it, set login_status True and return token & user id
    """
    data = request.get_json()
    if not data or not data.get("email") or not data.get("password"):
        return jsonify({"error": "Email and password required"}), 400

    user = User.query.filter_by(email=data["email"]).first()
    if not user or not check_password_hash(user.password, data["password"]):
        return jsonify({"error": "Invalid credentials"}), 401

    if user.login_status:
        return jsonify({"error": "User already logged in"}), 403

    # generate unique token (retry until unique)
    for _ in range(5):
        token = generate_token_16hex()
        if not User.query.filter_by(login_token=token).first():
            break
    else:
        return jsonify({"error": "Could not generate login token, try later"}), 500

    user.login_status = True
    user.login_token = token
    if data.get("firebase_token"):
        user.firebase_token = data.get("firebase_token")
    db.session.commit()

    return jsonify({
        "message": "Login successful",
        "token": token,
        "user_id": user.id
    }), 200

@app.route("/logout", methods=["POST"])
def logout():
    """
    Expected JSON: {"token": "..."} OR header X-Auth-Token: token
    """
    token = None
    if "X-Auth-Token" in request.headers:
        token = request.headers.get("X-Auth-Token")
    else:
        data = request.get_json(silent=True) or {}
        token = data.get("token")

    if not token:
        return jsonify({"error": "Token required"}), 400

    user = User.query.filter_by(login_token=token).first()
    if not user:
        return jsonify({"error": "Invalid token"}), 401

    user.login_status = False
    user.login_token = None
    db.session.commit()
    return jsonify({"message": "Logged out successfully"}), 200

@app.route("/login_status/<int:user_id>", methods=["GET"])
def login_status(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({
        "login_status": user.login_status,
        "token": user.login_token if user.login_status else None,
        "user": {"id": user.id, "name": user.name, "email": user.email}
    }), 200

# Example protected route:
@app.route("/reminders", methods=["GET"])
def get_reminders():
    token = request.headers.get("X-Auth-Token")  # from frontend
    user_id = request.headers.get("X-User-Id")   # or from JSON body if needed

    if not token or not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    # Verify token matches user_id and login_status is True
    user = User.query.filter_by(id=int(user_id), login_token=token, login_status=True).first()
    if not user:
        return jsonify({"error": "Unauthorized"}), 401

    med_reminders = MedReminders.query.filter_by(user=user.id).all()
    health_reminders = HealthReminders.query.filter_by(user=user.id).all()

    med_list = [
        {
            "sno": med.sno,
            "med": med.med,
            "dosage": med.dosage,
            "Schedule": med.Schedule.value,
            "time": med.time.strftime("%Y-%m-%d %H:%M:%S"),
        }
        for med in med_reminders
    ]

    health_list = [
        {
            "sno": hr.sno,
            "title": hr.title,
            "time": hr.time.strftime("%Y-%m-%d %H:%M:%S"),
            "switch": hr.switch.value,
        }
        for hr in health_reminders
    ]

    return jsonify({"medication_reminders": med_list, "health_reminders": health_list})


# Example: change login status manually (admin or special flow)
@app.route("/set_login_status", methods=["POST"])
def set_login_status():
    """
    Admin endpoint to forcibly set login_status (be careful).
    JSON: {"user_id": 1, "status": true/false}
    """
    data = request.get_json()
    if not data or "user_id" not in data or "status" not in data:
        return jsonify({"error": "user_id and status required"}), 400
    user = User.query.get(data["user_id"])
    if not user:
        return jsonify({"error": "User not found"}), 404
    user.login_status = bool(data["status"])
    if not user.login_status:
        user.login_token = None
    db.session.commit()
    return jsonify({"message": "Updated login status"}), 200

# Optional: resend OTP (only if temp user exists and not expired)
@app.route("/resend_otp", methods=["POST"])
def resend_otp():
    data = request.get_json()
    if not data or "email" not in data:
        return jsonify({"error": "email required"}), 400
    temp_user = TempUser.query.filter_by(email=data["email"]).first()
    if not temp_user:
        return jsonify({"error": "No pending verification found"}), 404
    # If expired, remove and ask user to re-register
    if datetime.utcnow() > temp_user.created_at + timedelta(minutes=15):
        db.session.delete(temp_user)
        db.session.commit()
        return jsonify({"error": "OTP expired. Please register again."}), 400

    # generate new OTP and update hash + created_at
    otp = random.randint(100000, 999999)
    temp_user.otp_hash = generate_password_hash(str(otp))
    temp_user.created_at = datetime.utcnow()
    db.session.commit()

    try:
        send_verification_email(temp_user.email, temp_user.slug, otp)
    except Exception as e:
        return jsonify({"error": "Failed to send email", "detail": str(e)}), 500

    return jsonify({"message": "New OTP sent"}), 200

# ---------------- Run ----------------
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
