import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://form-backend-swart.vercel.app/submit", userData);
      alert(response.data.message);
      setUserData({ name: "", email: "", message: "" }); // Reset Form
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Try again!");
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 text-white mx-auto mt-20">
      <div className="text-center mb-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp Logo" className="h-16 mx-auto"/>
        <h2 className="text-2xl font-semibold mt-2">Sign Up</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={userData.name}
          onChange={handleChange}
          className="w-full p-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          className="w-full p-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-green-500"
          required
        />

        <textarea
          name="message"
          placeholder="Problem you are facing..."
          value={userData.message}
          onChange={handleChange}
          className="w-full p-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-green-500 h-24"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full p-3 bg-green-500 rounded-md hover:bg-green-600 transition-all font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
