"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Phone, Mail, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setSuccess(null);
        }, 2000);
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccess("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-20 md:py-26 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          We'd love to hear from you! Get in touch with us today.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <p className="mt-2 text-center text-green-600">{success}</p>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
            <Phone className="text-blue-600 w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Call Us</h3>
              <p className="text-gray-600">+91 7083679620</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
            <Mail className="text-blue-600 w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Email Us</h3>
              <p className="text-gray-600">support@gmail.com</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
            <MapPin className="text-blue-600 w-6 h-6" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Visit Us</h3>
              <p className="text-gray-600">India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
