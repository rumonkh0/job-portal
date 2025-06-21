import React, { useState } from "react";
import CourseCard from "../../components/CourseCard";

function Courses() {
  const tabs = ["All", "One day", "Weekly", "Monthly", "Online"];
  const [activeTab, setActiveTab] = useState("All");
  const tabBaseClasses =
    "hover:px-4 hover:py-0.5 hover:rounded-4xl cursor-pointer transition-all hover:bg-white hover:text-black";
  return (
    <div className="w-[1170px] flex flex-col items-center gap-12">
      <div className="head w-[800px] flex flex-col items-center gap-6">
        <div className="title text-[40px] font-bold">
          Courses for your Career
        </div>
        <div className="text-center">
          Explore our curated selection of career-oriented courses designed to
          enhance your professional skills and propel your career forward
        </div>

        <div className="tab px-4 py-3 flex items-center gap-6 bg-blue-600 rounded-4xl text-white ">
          {tabs.map((tab, index) => (
            <React.Fragment key={tab}>
              <div
                onClick={() => setActiveTab(tab)}
                className={`${tabBaseClasses} ${
                  activeTab === tab
                    ? "bg-white text-black px-4 py-0.5 rounded-4xl"
                    : ""
                }`}
              >
                {tab}
              </div>
              {/* Add separator if NOT the last tab */}
              {index !== tabs.length - 1 && (
                <span className="text-white select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="cards flex flex-wrap justify-between gap-7.5">
        {Array.from({ length: 6 }).map((_, index) => (
          <CourseCard
            key={index}
            image="/courseImage.png"
            schedule="Weekly"
            sesssions="20"
            duration="5 hour"
            title="Marketing, social and statistical analysis"
            pricing="Paid"
            instructorImage="/avatar.png"
            instructorName="Kuddus Ali"
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
