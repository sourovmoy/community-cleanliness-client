// Contact.jsx
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!"); // simulate submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Contact Us
      </h1>

      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-3xl text-center mb-8">
        Have questions, suggestions, or feedback? Reach out to us using the form
        below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-lg space-y-5"
      >
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-sky-500 focus:outline-none resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-white btn-primary transition duration-300 shadow-lg hover:shadow-sky-500/30 dark:shadow-green-500/20"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
