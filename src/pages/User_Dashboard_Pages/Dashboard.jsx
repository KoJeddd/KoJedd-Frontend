import { useState } from "react";
import React from "react";
import { UserNavbar } from "../../components/Navbar";
import Main from "./Main";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "Main", content: <Main /> },
    { title: "Collab Proposal", content: "" },
    { title: "My Applications", content: "" },
    { title: "Associates", content: "" },
  ];
  return (
    <>
      <main>
        <div className="bg-[#0f0f0f] px-8 py-32 text-white md:px-10 ">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-thin capitalize md:text-5xl lg:text-6xl">
              Dashboard
            </h1>
            <p className="mt-5 text-lg text-gray-400">
              Edit your profile info here
            </p>
          </div>
          <div className="flex justify-center">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex cursor-pointer px-2 py-2 text-center font-bold ${
                  activeTab === index
                    ? "border-b-2 border-[#FFDF00] text-[#FFDF00]"
                    : "border-b-2 border-transparent text-gray-500 hover:text-[#FFDF00]"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="">{tabs[activeTab].content}</div>
        </div>
      </main>
    </>
  );
};

export default UserDashboard;
