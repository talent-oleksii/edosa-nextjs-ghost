import React from "react";
import "@/public/assets/css/FAQ.css";
import { FiPlus } from "react-icons/fi";

// Define the type for FAQ item
interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
}

// Define the props type for the FAQ component
interface FAQProps {
  faq: FAQItem;         // Each FAQ item
  index: number;        // Index of the FAQ item
  toggleFAQ: (index: number) => void; // Function to toggle the FAQ item
}

const FAQ: React.FC<FAQProps> = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`faq ${faq.open ? "open" : ""}`} // Using template literals for className
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question text-text-color">{faq.question}</div>
      <div className="faq-answer text-text-color">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
