from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_login import (
    LoginManager,
    UserMixin,
    login_user,
    login_required,
    logout_user,
    current_user,
)
from flask_mail import Mail, Message
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
import random

# ---------------- Config ----------------
app = Flask(__name__)
CORS(app)
app.config["SECRET_KEY"] = "your_secret_key_here"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Mail config (replace with your SMTP settings)
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = "srms.inventory@gmail.com"
app.config["MAIL_PASSWORD"] = "ilslkasxuyqcqnke"
app.config["MAIL_DEFAULT_SENDER"] = "srms.inventory@gmail.com"

db = SQLAlchemy(app)
login_manager = LoginManager(app)
mail = Mail(app)


# ---------------- Models ----------------
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(15), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    address = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(20), nullable=False)

    # Optional fields
    weight = db.Column(db.Float, nullable=True)
    allergy = db.Column(db.String(200), nullable=True)
    height = db.Column(db.Float, nullable=True)
    blood_group = db.Column(db.String(10), nullable=True)
    weak_eyes = db.Column(db.String(50), nullable=True)
    emergency_contact = db.Column(db.String(15), nullable=True)
    doctor_phone = db.Column(db.String(15), nullable=True)

    # Firebase notifications
    firebase_token = db.Column(db.String(300), nullable=True)


class TempUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(15), unique=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)
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
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# ---------------- Routes ----------------
@app.route("/signup", methods=["POST"])
def register():
    print("hello")
    data = request.json
    print(data)
    if not data:
        return jsonify({"error": "Missing data"}), 400

    # Check if already exists in main or temp db
    if (
        User.query.filter((User.email == data["email"]) | (User.phone == data["phone"]))
        .first()
        or TempUser.query.filter(
            (TempUser.email == data["email"]) | (TempUser.phone == data["phone"])
        ).first()
    ):
        return jsonify({"error": "User already exists"}), 400

    # Generate OTP
    otp = random.randint(100000, 999999)
    if (data["includeMedical"]):
        temp_user = TempUser(
            name=data["name"],
            phone=data["phone"],
            email=data["email"],
            address=data["address"],
            password=generate_password_hash(data["password"]),
            age=data["age"],
            gender=data["gender"],
            weight=data.get("weight"),
            allergy=data.get("allergies"),
            height=data.get("height"),
            blood_group=data.get("blood"),
            weak_eyes=data.get("vision"),
            emergency_contact=data.get("emergency"),
            doctor_phone=data.get("doctor"),
            firebase_token=data.get("fb_token"),
            otp_hash=generate_password_hash(str(otp)),
        )
    else:
        temp_user = TempUser(
            name=data["name"],
            phone=data["phone"],
            email=data["email"],
            address=data["address"],
            password=generate_password_hash(data["password"]),
            age=data["age"],
            gender=data["gender"],
            weight=False,
            allergy=False,
            height=False,
            blood_group=False,
            weak_eyes=False,
            emergency_contact=False,
            doctor_phone=False,
            firebase_token=data.get("fb_token"),
            otp_hash=generate_password_hash(str(otp)),
        )

    db.session.add(temp_user)
    db.session.commit()

    # Send OTP
    msg = Message("Your OTP Code", recipients=[data["email"]])
    msg.body = f"Your OTP is {otp}. It is valid for 15 minutes."
    mail.send(msg)

    return jsonify({"message": "OTP sent to email"}), 201


@app.route("/verify", methods=["POST"])
def verify():
    data = request.json
    temp_user = TempUser.query.filter_by(email=data["email"]).first()
    print(data["otp"],data["email"])

    if not temp_user:
        return jsonify({"error": "User not found"}), 404

    # Expiry check
    if datetime.utcnow() > temp_user.created_at + timedelta(minutes=15):
        db.session.delete(temp_user)
        db.session.commit()
        return jsonify({"error": "OTP expired"}), 400

    # OTP check
    if not check_password_hash(temp_user.otp_hash, str(data["otp"])):
        return jsonify({"error": "Invalid OTP"}), 400

    # Move to main User table
    new_user = User(
        name=temp_user.name,
        phone=temp_user.phone,
        email=temp_user.email,
        address=temp_user.address,
        password=temp_user.password,
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
    print("done")
    return jsonify({"message": "User verified and registered successfully"})


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    if not data or not data.get("email") or not data.get("password"):
        return jsonify({"error": "Email and password required"}), 400

    user = User.query.filter_by(email=data["email"]).first()
    if not user or not check_password_hash(user.password, data["password"]):
        return jsonify({"error": "Invalid credentials"}), 401

    if "firebase_token" in data and data["firebase_token"]:
        user.firebase_token = data["firebase_token"]
        db.session.commit()

    login_user(user)
    return jsonify({"message": "Logged in successfully"})


@app.route("/logout", methods=["POST"])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logged out successfully"})


@app.route("/login_status", methods=["GET"])
def login_status():
    if current_user.is_authenticated:
        return jsonify(
            {
                "login_status": True,
                "user": {"id": current_user.id, "name": current_user.name},
            }
        )
    else:
        return jsonify({"login_status": False})


@app.route("/protected", methods=["GET"])
@login_required
def protected():
    return jsonify({"message": f"Hello {current_user.name}, you are logged in!"})


@app.route("/public", methods=["GET"])
def public():
    return jsonify({"message": "This is a public route, no login required"})


# ---------------- Run ----------------
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
