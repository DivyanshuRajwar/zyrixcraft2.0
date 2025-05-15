import  { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/ZyrixcraftLogo.webp";
import { FiX,FiLinkedin,FiSend  } from "react-icons/fi";
import {FaInstagram , FaXTwitter ,FaWhatsapp   } from "react-icons/fa6";
import { HiArrowLongDown } from "react-icons/hi2";
import '../style/BecomeClient.css'
import { useNavigate } from "react-router-dom";

const ClientHome = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [state, setState] = useState({
    submitting: false,
    error: null
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
   
  };

  const validateForm = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.mobile.trim() !== '' &&
      formData.message.trim() !== ''
    );
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill all fields');
      return;
    }

    setState(prev => ({ ...prev, submitting: true }));
    
    try {
  const response = await fetch("http://localhost:5000/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (response.ok) {
    toast.success('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: ''
    });
    navigate("/thanks");
  } else {
    toast.error(result.message || 'Failed to send message');
  }
} catch (error) {
  toast.error('Failed to send message');
  console.error('Error:', error);
}
finally {
      setState(prev => ({ ...prev, submitting: false }));
    }
  };

  const handleClose = () => {
    navigate("/");
  }
  return (
    <div className="fixed z-101 inset-0 w-full h-screen flex items-center justify-center shadow-lg overflow-hidden">
      {/* Left Section */}
      <div
        id="left"
        className="w-1/2 h-screen bg-[#000000e3] text-white flex flex-col gap-2 justify-center items-center"
      >
        <div className="w-[70%] relative h-[400px] flex">
          <img
            src={logo}
            alt="Logo"
            // loading="lazy"
            className="w-[280px] h-[300px]"
          />
          <span className=" absolute bottom-32 right-5 text-[65px] font-bold font-sans ">
            yrixCraft
          </span>
          <span className="absolute bottom-10 text-2xl font-sans ">
            Your one-stop solution for all your digital needs—web, UI/UX,
            graphics, and more!
          </span>
        </div>

        {/* Contact & Social Links */}
        <div className="w-[70%] h-[200px] gap-2 flex">
          <div className="text-[20px]">
            <p>Contact Us</p>
            <span>Phone:</span>
            <p className="hover:scale-[1.1] hover:cursor-pointer">
              +91 9711625392
            </p>
            <span>Email:</span>
            <p
              className="hover:scale-[1.1] hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:zyrixcraft@gmail.com")
              }
            >
              zyrixcraft@gmail.com
            </p>
          </div>

          <div className="w-[2px] ml-5 h-[170px] bg-black rounded-3xl"></div>

          <div className="ml-5 flex flex-col gap-2 text-[20px] w-[120px] justify-start items-center">
            <p>Follow Us</p>

            <div
              onClick={() =>
                window.open(
                  "https://www.instagram.com/zyrixcraft?igsh=dWE0d2Vwbmx4NjBm",
                  "_blank"
                )
              }
              className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
            >
              <FaInstagram />
              <span>Instagram</span>
            </div>

            <div
              onClick={() => window.open("https://x.com/zyrixcraft", "_blank")}
              className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
            >
              <FaXTwitter />
              <span>Twitter</span>
            </div>

            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/zyrixcraft/posts/?feedView=all",
                  "_blank"
                )
              }
              className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </div>

            <div
              onClick={() =>
                window.open("https://wa.me/919711625392", "_blank")
              }
              className="flex gap-2 w-full justify-start items-center hover:scale-[1.1] hover:cursor-pointer"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div id="right" className="w-1/2 h-screen font-serif bg-[#000] text-white">
        <div className="relative" id="right-container">
          {/* Close Button */}

          <FiX
            id="close-btn"
            onClick={handleClose}
            
            className="absolute top-0 flex justify-center items-center rounded-full hover:scale-[1.1] hover:cursor-pointer hover:bg-orange-600  transition-all duration-500 ease-in-out"
          />

          <h2 className="text-5xl" id="contact-heading">
            Let's get in touch
          </h2>
          <HiArrowLongDown  className=" text-orange-600 text-[8em] -ml-15  " />

          <span
            id="contact-subtext"
            className="absolute top-17 left-10 text-[18px]"
          >
            Excited to bring your vision to life! Let’s create something amazing
            together.
            <br />
            Call us for any inquiry.
          </span>

      {/* Form */}
<form onSubmit={handleSubmit} id="contact-form">
  <div className="w-full" id="form-wrapper">
    {/* Name, Email, Mobile Inputs */}
    <div className="w-full flex flex-col md:flex-row gap-5" id="input-wrapper">
      
      {/* Name Input */}
      <div className="w-full" id="name-input-box">
        <label htmlFor="name" className="text-xl block mb-2">Name</label>
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Ansh from zyrixcraft"
          className="w-full bg-[#b8a4a45d] p-4 border-none rounded-2xl"
          required
          value={formData.name}
          onChange={handleChange}
        />
      
      </div>

      {/* Email Input */}
      <div className="w-full" id="email-input-box">
        <label htmlFor="email" className="text-xl block mb-2">Your Email</label>
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="ansh@gmail.com"
          className="w-full bg-[#b8a4a45d] p-4 border-none rounded-2xl"
          required
          value={formData.email}
          onChange={handleChange}
        />
       
      </div>

      {/* Mobile Number Input */}
      <div className="w-full" id="mobile-input-box">
        <label htmlFor="mobile" className="text-xl block mb-2">Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          id="mobile-input"
          placeholder="+91 9876543210"
          pattern="[0-9]{10}"
          className="w-full bg-[#b8a4a45d] p-4 border-none rounded-2xl"
          required
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
    </div>

    {/* Message TextArea */}
    <div className="flex flex-col mt-5" id="message-wrapper">
      <label htmlFor="message" className="text-2xl block mb-2">
        Tell us more about your project
      </label>
      <textarea
        name="message"
        id="message-textarea"
        placeholder="Something about your great idea"
        className="mt-2 w-full h-[200px] border-none bg-[#b8a4a45d] rounded-2xl p-5 pt-2 text-left resize-none"
        required
        value={formData.message}
        onChange={handleChange}
      />
      

      {/* Submit Button */}
      <button
        id="submit-btn"
        type="submit"
        className="w-full md:w-[250px] text-[18px] flex gap-2 justify-center items-center h-[60px] mt-5 rounded-full bg-white text-orange-600 font-bold transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white hover:shadow-lg hover:cursor-pointer"
      >
        {state.submitting ? "Sending..." : "Send Message"}
        <FiSend className="text-2xl" />
      </button>
    </div>
  </div>
</form>

        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ClientHome;
