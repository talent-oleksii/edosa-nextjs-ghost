'use client';
import React, { FC, useState } from "react";
import LearnCard from "../components/cards/LearnCard";
const learnItems = [
  {
    title: "Free",
    header: "Start your Journey",
    text: "Ideal for beginners eager to learn the basics.",
    items: [
      "5-Day Email AI Value Course",
      "AI Chatbot Help",
      "Access to Interactive Workbook",
      "Book Discounts",
      "Free Newsletter Access"
    ],
    buttonName: "Sign up",
    backColor: "white",
    border: "border-2 border-gray-300"
  },
  {
    title: "£697",
    header: "Advance your Skills",
    text: "Ideal for Leaders enhancing their strategic decision-making with data.",
    items: [
      "Access to all Basic Features",
      "3-week Cohort Training Course",
      "Access to Executive Handbook",
      "Bonus 1-on-1 Coaching Session",
      "Access to Curated Resource Library"
    ],
    buttonName: "Get Started",
    backColor: "#F3F8FE",
    border: "border-solid"
  },
  {
    title: "£1,950",
    header: "Achieve Mastery",
    text: "Ideal for Top Executives seeking comprehensive and personalized support.",
    items: [
      "Access to all Advanced Features",
      "4 Personalized Coaching Sessions",
      "12 Reflective Coaching Sessions",
      "3-week Cohort Training Course",
      "Access to Premium Newsletter"
    ],
    buttonName: "Get Started",
    backColor: "white",
    border: "border-2 border-gray-300"
  },
];
const LearnStyle: FC = () => {

  return (
    <div className="mt-4 sm:mt-14 sm:px-10 flex justify-center items-center flex-col">
      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-3 sm:px-5 py-1">
        Learn
      </div>
      <div className="text-lg sm:text-4xl leading-11 font-bold mt-4 sm:mt-8 text-text-color">
        Learn with Edosa Odaro
      </div>
      <div className="text-lg sm:text-xl leading-8 mt-4 sm:mt-8 text-text-color">
        Edosa Odaro’s learning resources are designed to support professionals at every <br />
        stage of their journey, from beginners to advanced leaders. Explore our range of <br />
        educational offerings to gain valuable skills and insights in data science and AI:
      </div>
      <div className="text-sm leading-8 font-bold rounded-full bg-[#667EFF] text-white px-3 sm:px-5 py- mt-8">
        Most Popular
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10 mt-6">
        {
          learnItems.map((item, index) => (
            <LearnCard
              key={index}
              title={item.title}
              header={item.header}
              text={item.text}
              items={item.items}
              buttonName={item.buttonName}
              backColor={item.backColor}
              border={item.border}
            />
          ))
        }
      </div>
    </div>
  );
};

export default LearnStyle;
