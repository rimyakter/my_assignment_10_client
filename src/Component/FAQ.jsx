import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I find a roommate?",
    answer:
      "You can go to Add roommates and post there to find suitable roommates.",
  },
  {
    question: "Is there a fee to use the platform?",
    answer: "No, our Roommate Finder service is completely free for all users.",
  },
  {
    question: "Can I contact roommates directly?",
    answer:
      "Yes, each roommate post has a contact number and email information which helps you to get in touch with them.",
  },
  {
    question: "How do I update my post if needed?",
    answer:
      "You can update your post information by logging into your account and navigating to the My Listing section. There you can see all your posts and update or delete them.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow border border-base-300 bg-white bg-opacity-80 rounded-box"
            >
              <input
                type="checkbox"
                checked={openIndex === index}
                onChange={() => toggleFAQ(index)}
              />
              <div className="collapse-title text-black text-sm md:text-lg font-medium flex justify-between items-center">
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="ml-2" />
                ) : (
                  <FaChevronDown className="ml-2" />
                )}
              </div>
              <div className="collapse-content text-black text-xs md:text-sm">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
