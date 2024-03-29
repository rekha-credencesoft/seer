import React from "react";
import "./index.css";
import Faceboook from "../../assets/images/Facebook.png";
import Google from "../../assets/images/Google.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import Message from "../../assets/images/Message.png";
import HeroImg from "../../assets/images/SeerHeroImg.svg";

const Demo = () => {
  return (
    <div>
      <h1
        className="text-center lg:text-3xl md:text-3xl text-xl px-6 lg:px-0 md:px-0 mt-10 font-bold"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        Prepare for every inventory challenge
      </h1>
      <div className="ContactContainer -mt-10 lg:mt-0 md:mt-0">
        <div className="ContactLeftSection">
          <img src={HeroImg} alt="casestudies" class="glassons" />
        </div>
        <div className="ContactRightSection">
          <p className="text-lg lg:text-xl lg:mt-10" style={{ color: "gray" }}>
            <span
              className="text-lg lg:text-xl font-bold mr-2"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Optimize Store Inventory Levels
            </span>
            <span
              className="text-lg lg:text-xl lg:mt-10"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              to get the right stock in the right stores at the right time
              considering future promotions, time of year, special events,
              expected foot traffic, and logistical factors.
            </span>
          </p>
          <button style={{ fontFamily: "Roboto, sans-serif" }} className="lg:text-xl text-sm text-white bg-blue-400 px-4 py-2 rounded-3xl  lg:block lg:mt-5 mt-3  ">
            Demo
          </button>
        </div>
      </div>
      <div className="ContactContainer">
        <div className="ContactLeftSection">
          <img src={HeroImg} alt="casestudies" class="glassons" />
        </div>
        <div className="ContactRightSection">
          <p className="text-lg lg:text-xl lg:mt-10" style={{ color: "gray" }}>
            <span
              className="text-lg lg:text-xl font-bold mr-2"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Automate Weekly Vendor Re-Orders.
            </span>
            <span
              className="text-lg lg:text-xl lg:mt-10"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Calculate safety stock with a desired confidence factor. Determine
              reorder points and refill levels using Seer’s sales forecast, lead
              time and demand variability, to achieve “just-in-time” order
              fulfilment.
            </span>
          </p>
          <button style={{ fontFamily: "Roboto, sans-serif" }} className="lg:text-xl text-sm text-white bg-blue-400 px-4 py-2 rounded-3xl  lg:block lg:mt-5 mt-3 ">
            Demo
          </button>
        </div>
      </div>
      <div className="ContactContainer">
        <div className="ContactLeftSection">
          <img src={HeroImg} alt="casestudies" class="glassons" />
        </div>
        <div className="ContactRightSection">
          <p className="text-lg lg:text-xl lg:mt-10" style={{ color: "gray" }}>
            <span
              className="text-lg lg:text-xl font-bold mr-2"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Reallocate Stock Between Locations
            </span>
            <span
              className="text-lg lg:text-xl lg:mt-10"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              based on “real-time” sales forecasts, pre-defined re-group
              regions, transport costs and times to maximise sales across the
              network.
            </span>
          </p>
          <button style={{ fontFamily: "Roboto, sans-serif" }} className="lg:text-xl text-sm text-white bg-blue-400 px-4 py-2 rounded-3xl  lg:block lg:mt-5 mt-3 ">
            Demo
          </button>
        </div>
      </div>
      <div className="ContactContainer">
        <div className="ContactLeftSection">
          <img src={HeroImg} alt="casestudies" class="glassons" />
        </div>
        <div className="ContactRightSection">
          <p className="text-lg lg:text-xl lg:mt-10" style={{ color: "gray" }}>
            <span
              className="text-lg lg:text-xl font-bold mr-2"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Gauge Desirability of Potential Products.
            </span>
            <span
              className="text-lg lg:text-xl lg:mt-10"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Craft a range comprising the best of them to achieve your category
              mix and sales goals. Simulate sales to determine the optimum range
              by store using product imagery if available. Begin the new season
              with confidence.
            </span>
          </p>
          <button style={{ fontFamily: "Roboto, sans-serif" }} className="lg:text-xl text-sm text-white bg-blue-400 px-4 py-2 rounded-3xl  lg:block lg:mt-5 mt-3 ">
            Demo
          </button>
        </div>
      </div>
      <div className="ContactContainer">
        <div className="ContactLeftSection">
          <img src={HeroImg} alt="casestudies" class="glassons" />
        </div>
        <div className="ContactRightSection">
          <p className="text-lg lg:text-xl lg:mt-10" style={{ color: "gray" }}>
            <span
              className="text-lg lg:text-xl font-bold mr-2"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Simulate Long Term Demand for Perennial Lines.
            </span>
            <span
              className="text-lg lg:text-xl lg:mt-10"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Adjust the simulation for potential drivers such as planned
              promotions and known events. Plan orders to ensure you never run
              out of stock.
            </span>
          </p>
          <button style={{ fontFamily: "Roboto, sans-serif" }} className="lg:text-xl text-sm text-white bg-blue-400 px-4 py-2 rounded-3xl  lg:block lg:mt-5 mt-3 ">
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
