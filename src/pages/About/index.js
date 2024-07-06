import React from "react";
import MeetTheTeam from "../../components/MeetTheTeam";
import Methodology from "../../components/Methodology";
import "./index.css";
import MethodologyPhone from "../../components/MethodologyPhone";
const index = () => {
  return (
    <div className=" py-5 pt-4 about ">
      <div className="bg-[#edeeff] pb-10">
        <p className="text-center lg:text-2xl md:text-xl text-sm px-6 md:px-20 pt-10">
          Notwithstanding the hype around AI in recent years, quintessentially its
          ability to discern patterns and relationships across untenably large and
          complex datasets is powerful.
          <br />
          This clarity allows people to make confident decisions while alleviating
          cognitive limitations.
          <br />
          Cognisant of this and the research that has underpinned AI globally, we
          embarked on creating Stock Seer and Seer Insights.
        </p>
        <MeetTheTeam />
      </div>
      <div className="">
        <Methodology />
      </div>

    </div>
  );
};

export default index;
