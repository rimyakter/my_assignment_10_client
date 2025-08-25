import React from "react";
import { FaUserFriends, FaShieldAlt, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaUserFriends size={40} className="text-[#3a8ef6]" />,
    title: "Matching Lifestyles",
    description:
      "Find roommates that fit your preferences and lifestyle with personalized search results curated by our matching algorithm.",
  },
  {
    icon: <FaShieldAlt size={40} className="text-[#3a8ef6]" />,
    title: "Scam & Spam Free",
    description:
      "A.I. and human vetted profiles. We keep the scammers out, and allow real people to connect safely on our platform with secure in-app messaging.",
  },
  {
    icon: <FaClock size={40} className="text-[#3a8ef6]" />,
    title: "Save Time",
    description:
      "Connect with potential roommates that are relevant and have a mutual intent. Refine and filter out any that are not a good fit. Chat with just those that matter.",
  },
];

const RoommateFeatures = () => {
  return (
    <section className=" py-16">
      <div className="container w-11/12 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Finding a great roommate should be hassle free
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card  bg-opacity-80 shadow-xl p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoommateFeatures;
