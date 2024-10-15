'use client';
import React, { FC, useState } from "react";
import FAQCard from "../components/FAQCard";
import "@/public/assets/css/FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
}

const FAQ: FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "What kinds of learning resources are available?",
      answer:
        "We offer a variety of resources including structured courses, curated content bundles, coaching sessions, and books. These resources are designed to cater to different levels, from beginners to advanced professionals.",
      open: true
    },
    {
      question: "How can I access coaching or consulting services?",
      answer: "This many!",
      open: false
    },
    {
      question:
        "How can I stay updated with new content?",
      answer: "This many!",
      open: false
    },
    {
      question:
        " Are there resources available for leaders and executives?",
      answer: "This many!",
      open: false
    },
    {
      question:
        "How can I connect directly with Edosa?",
      answer: "This many!",
      open: false
    },
  ]);
  const toggleFAQ = (index: number): void => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="mt-4 sm:mt-14 sm:px-10 flex justify-center items-center flex-col">
      <div>
        <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F5F5F5] px-3 sm:px-5 py-1">FAQ</span>
      </div>
      <div className="text-lg sm:text-4xl leading-11 font-bold mt-4 sm:mt-8 text-text-color">
        Frequently asked questions
      </div>
      <div className="lg:w-8/12 w-full mx-10 sm:mx-64">
        <div>
          <div className="faqs">
            {faqs.map((faq, index) => (
              <FAQCard faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
