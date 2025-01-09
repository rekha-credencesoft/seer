import React from "react";
import emailjs from "@emailjs/browser";
import "./index.css";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const HeroSection = ({ scrollToDemo }) => {
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
    <div className="HeroSectionContainer">
      <div className="">
        <div className="HeroSectionLeftText">
          <h1>
            Your accurate, intuitive
            <br />
            <span className="">demand forecaster.</span>
          </h1>
          <p style={{ fontFamily: "roboto" }}>
            Helping inventory planners get the right stock, in the right place,
            at <br /> the right time.
          </p>
          <button
            onClick={scrollToDemo}
            className="lg:text-lg text-white mt-8 lg:bg-[#22bbff]  lg:px-4 lg:py-2 lg:rounded-3xl hidden lg:block "
            style={{ fontFamily: "gothic-book, sans-serif" }}
          >
            Learn more
          </button>
        </div>

        <div className="ContactRightSectionHome lg:flex">
          <div className="cc flex bg-white rounded-lg pl-4">
            <div className="w-2/3">
              <form onSubmit={handleFormSubmit}>
                <h1
                  style={{ fontFamily: "gothic-book" }}
                  className="text-2xl text-[#141722] font-bold py-2"
                >
                  Get in touch
                </h1>
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
                    className="w-full border p-2 rounded-lg"
                    rows="2"
                    required
                  ></textarea>
                </div>
                <div className="pt-2 pb-6 submit">
                  <button
                    type="submit"
                    className="lg:text-lg text-white lg:bg-[#22bbff] lg:px-4 lg:py-1 lg:rounded-lg button"
                    style={{ fontFamily: "gothic-book, sans-serif" }}
                  >
                    Submit
                  </button>
                </div>
              </form>

            </div>

            <div className="w-full md:w-1/3 rightsection rounded-r-lg text-white">
              <div className="grid place-content-center place-items-center grid-cols-1 justify-center items-center lg:pt-14 gap-8">
                <a
                  href="mailto:contact@seer-inc.com"
                  className="flex flex-col items-center group"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:bg-gray-300 cursor-pointer">
                    <MdEmail className="text-4xl text-black transition duration-300" />
                  </div>
                  <p
                    style={{ fontFamily: "roboto" }}
                    className="gmail inc text-white mt-2 lg:pl-0 text-center"
                  >
                    contact@seer-inc.com
                  </p>
                </a>
                <a
                  href="tel:+6498892409"
                  className="flex flex-col items-center group"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:bg-gray-300 cursor-pointer">
                    <MdContactPhone className="text-4xl text-black transition duration-300" />
                  </div>
                  <p
                    style={{ fontFamily: "roboto" }}
                    className="text-white gmail mt-2 text-center"
                  >
                    +6498892409
                  </p>
                </a>
                <a
                  href="https://www.google.com/search?q=seer+inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:bg-gray-300 cursor-pointer">
                    <FaMapLocationDot className="text-4xl text-black transition duration-300" />
                  </div>
                  <p
                    style={{ fontFamily: "roboto" }}
                    className="text-white text-center gmail mt-1"
                  >
                    Auckland, <br /> New Zealand
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="HeroSectionBgImg">
        <img
          src="https://bookonelocal.in/cdn/Seer_Oracle.svg"
          alt="hero"
          className="desktop-image"
        />
        <img
          src="https://bookonelocal.in/cdn/Seer_Oracle_phone.svg"
          alt="hero"
          className="mobile-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
