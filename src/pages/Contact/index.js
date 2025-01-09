import React from "react";
import "./index.css";
import Google from "../../assets/images/Google.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import emailjs from "@emailjs/browser";
import YouTube from "../../assets/images/youtube.png";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactPhone, MdEmail } from "react-icons/md";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const phone = formData.get("phone");
    const email = formData.get("email");

    const phoneRegex = /^[0-9]{9,15}$/;
    if (phone && !phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (9-15 digits).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      from_name: formData.get("name"),
      from_email: email,
      phone: phone,
      message: formData.get("message"),
      to_name: "Sales Team",
    };

    const serviceId = "service_obe6chx";
    const templateId = "template_q8lg02n";
    const publicKey = "FZhMGf9IcnQFVIvPZ";

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Your message has been sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error("Error in sending email:", error);
        alert("Failed to send the message. Please try again.");
      }
    );
  };

  return (
    <div className="ContactContainer bg-[#edeeff] pb-10 md:pb-0 lg:pb-0">
      <div className="ContactLeftSection">
        <h1
          style={{ fontFamily: "gothic-book, sans-serif", boxShadow: "none" }}
        >
          Get In Touch
        </h1>
        <p style={{ fontFamily: "roboto" }} className="md:mt-4 mt-2">
          Tell us about your retail challenges.
        </p>
        <div className="ContactLeftSectionContactDetails ml-1">
          <p style={{ fontFamily: "roboto" }}>
            <span>Phone:</span> +6498892409
          </p>
          <p style={{ fontFamily: "roboto" }}>
            <span>Address:</span> Auckland, New Zealand
          </p>
          <p style={{ fontFamily: "roboto", cursor: "pointer" }}>
            <span>Email:</span>{" "}
            <a href="mailto:contact@seer-inc.com">contact@seer-inc.com</a>
          </p>
        </div>

        <div className="ContactLeftSectionIcons gap-2">
          <a
            href="https://www.google.com/search?q=seer+inc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Google} alt="Google" className="w-12 h-12" />
          </a>
          <a
            href="https://www.linkedin.com/company/seer-inc/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-12 h-12" />
          </a>
          <a
            href="https://www.youtube.com/@Seer-Inc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YouTube} alt="YouTube" className="w-12 h-12" />
          </a>
        </div>
      </div>

      <div className="ContactRightSection">
        <form onSubmit={handleFormSubmit}>
          <div className="flex rounded-l-lg">
            <div className="w-2/3 rounded-l-lg bg-white text-[#374151] pl-4">
              <p
                style={{ fontFamily: "gothic-book" }}
                className="text-2xl font-bold py-6 text-[#141722]"
              >
                Get in touch
              </p>
              <p
                className="py-2 text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Name:
              </p>
              <div className="mr-4">
                <input
                  type="text"
                  name="name"
                  className="w-full border p-2 rounded-lg"
                  required
                />
              </div>
              <p
                className="py-2 text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Email:
              </p>
              <div className="mr-4">
                <input
                  type="email"
                  name="email"
                  className="w-full border p-2 rounded-lg"
                  required
                />
              </div>
              <p
                className="py-2 text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Phone:
              </p>
              <div className="mr-4">
                <input
                  type="text"
                  name="phone"
                  className="w-full border p-2 rounded-lg"
                  required
                />
              </div>
              <p
                className="py-2 text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Enquiry:
              </p>
              <div className="mr-4">
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  className="w-full border p-2 rounded-lg"
                  required
                ></textarea>
              </div>
              <div className="pt-2 pb-6">
                <button
                  type="submit"
                  className="text-lg text-white bg-[#22bbff] px-4 py-1 rounded-lg"
                  style={{ fontFamily: "gothic-book" }}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="flex rightsec justify-center rounded-r-lg items-center">
              <div className="px-2 text-white flex flex-col justify-center items-center text-center h-full space-y-10">
                <div className="flex flex-col items-center">
                  <a href="mailto:contact@seer-inc.com" className="text-white">
                    <MdEmail size={60} />
                  </a>
                  <p className="pt-1 text-white">
                    <a
                      href="mailto:contact@seer-inc.com"
                      className="text-white"
                    >
                      contact@seer-inc.com
                    </a>
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <a href="tel:+6498892409" className="text-white">
                    <MdContactPhone size={60} />
                  </a>
                  <p className="text-white pt-2">
                    <a href="tel:+6498892409" className="text-white">
                      +6498892409
                    </a>
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <a
                    href="https://www.google.com/search?q=seer+inc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaMapLocationDot size={60} />
                  </a>
                  <p className="text-white pt-1">Auckland, New Zealand</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
