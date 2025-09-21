import React from "react";
import { Heart } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-white shadow rounded-2xl p-6 mt-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                {/* Brand Section */}
                <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-blue-500 to-green-400 p-2 rounded-full">
                        <Heart className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <span className="font-semibold text-lg">
                            <span className="text-blue-500">Arogya</span>
                            <span className="text-green-500">Care</span>
                        </span>
                        <p className="text-gray-500 text-sm">
                            Your trusted healthcare companion
                        </p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                        <li>24/7 Emergency: <span className="font-medium">911</span></li>
                        <li>
                            Support:{" "}
                            <span className="font-medium">1-800-HEALTH</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
