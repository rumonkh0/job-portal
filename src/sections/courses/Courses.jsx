import React from "react";
import CourseCard from "../../components/CourseCard";

function Courses() {
  return (
    <div>
      <div className="head">
        <div className="title">Courses for your Career</div>
        <div>
          Explore our curated selection of career-oriented courses designed to
          enhance your professional skills and propel your career forward
        </div>
        <div className="tab">
          <div>All</div>|<div>One day</div>|<div>Weekly</div>|<div>Monthly</div>
          |<div>Online</div>
        </div>
      </div>
      <div className="cards">
        <CourseCard />
      </div>
    </div>
  );
}

export default Courses;
