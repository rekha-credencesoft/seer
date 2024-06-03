import React from "react";
import "./index.css";
import ReactPlayer from "react-player";
import icon1 from "../../assets/images/icon.jpg";

const VideoSection = () => {
  return (
  
    <div className="container">
      <div className="headingContainer">
        <span
          className="lg:text-3xl text-lg font-bold text-white"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Lost sales and wastage cost retailers millions annually.
        </span>
      </div>

      <div className="videoSectionContainer">
        <div className="videoSectionLeftSection ">

          <p
            style={{ fontFamily: "Roboto, sans-serif" }}
            className="lg:text-lg text-sm text-white "
          >
            <div className="flex item-start justify-start">
              <img src={icon1} alt="" className="mt-8" />
              <p>
                <span className="lg:text-lg text-sm text-white ">
                  RETAIL IS PERVASIVE DETAIL:
                </span>{" "}
                Every retailer, small to large, is awash with millions of
                inventory decisions, informed by time-consuming, manual analysis
                of vast swathes of data.
              </p>
            </div>

            <div className="flex item-start justify-start">
              <img src={icon1} alt="" className="mt-8" />
              <p>
                <span className="lg:text-lg text-sm text-white ">
                THE COMPLEXITY IS MIND-BOGGLING:
                </span>{" "}
                It defeats even the largest, most experienced teams - who inevitably
                resort to crude calculations and compromises.
              </p>
            </div>

            <div className="flex item-start justify-start ">
              <img src={icon1} alt="" className="mt-8" />
              <p>
                <span className="lg:text-lg text-sm text-white ">
                IT’S EXPENSIVE:
                </span>{" "}
                Stock imbalances
               (usually excesses) result, requiring markdowns and inter-store
                 transfers.
              </p>
            </div>

          </p>
        </div>
        <div className="videoSectionRightSection">
          <ReactPlayer url="https://www.youtube.com/watch?v=9uXpgjIF-3c" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
