import React from "react";
import HeroImg from "../../assets/images/SeerHeroImg.svg";
import MobileImg from "../../assets/images/Seer_Oracle_phone.svg";
import "./index.css";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const HeroSection = ({ scrollToDemo }) => {
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
            Helping inventory planners get the right stock, in the right
            place,at <br /> the right time.
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
          <div className="cc flex bg-white rounded-lg pl-4  ">
            <div className="w-2/3 ">
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
                <input type="text" className="w-full border p-2 rounded-lg" />
              </div>
              <p
                className="py-2   text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Email:
              </p>
              <div className="mr-4">
                <input type="email" className="w-full border p-2 rounded-lg" />
              </div>
              <p
                className="py-2   text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Phone:
              </p>
              <div className="mr-4">
                <input type="text" className="w-full border p-2 rounded-lg" />
              </div>
              <p
                className="py-2   text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Enquiry:
              </p>
              <div className="mr-4 hidden md:block">
                <textarea
                  name=""
                  cols="30"
                  className="w-full border p-2 rounded-lg"
                  rows="2"
                ></textarea>
              </div>
              <div className="mr-4 block md:hidden">
                <textarea
                  name=""
                  cols="30"
                  className="w-full border p-2 rounded-lg"
                  rows="2"
                ></textarea>
              </div>
              <div className="pt-2 pb-6  submit">
                <button
                  className="lg:text-lg  text-white lg:bg-[#22bbff] lg:px-4 lg:py-1 lg:rounded-lg hidden lg:block button"
                  style={{ fontFamily: "gothic-book, sans-serif" }}
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/3 rightsection rounded-r-lg text-white">
              <div className="grid place-content-center place-items-center grid-cols-1 justify-center items-center lg:pt-14 gap-8">
                {/* Email Icon */}
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

                {/* Phone Icon */}
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

                {/* Location Icon */}
                <a
                  href="https://www.google.com/search?q=seer+inc&sca_esv=998424606ab613e9&rlz=1C1RXQR_en-GBIN1072IN1072&ei=sm8GZ4GYK-KcseMP4bHwmAU&ved=0ahUKEwiBuYKvn4GJAxViTmwGHeEYHFMQ4dUDCA8&uact=5&oq=seer+inc&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHNlZXIgaW5jMgsQABiABBiRAhiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEi3EFDlDFiJDnACeAGQAQCYAc0BoAGGA6oBBTAuMS4xuAEDyAEA-AEBmAIDoALOAcICChAAGLADGNYEGEeYAwCIBgGQBgiSBwMyLjGgB5UM&sclient=gws-wiz-serp"
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
