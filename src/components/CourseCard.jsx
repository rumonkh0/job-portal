import React from "react";

function CourseCard({
  image,
  schedule,
  sesssions,
  duration,
  title,
  pricing,
  instructorImage,
  instructorName,
  //   rating,
}) {
  return (
    <div className="card">
      <div>
        <img src={image} alt="" />
        <div>{schedule}</div>
      </div>
      <div>
        <div>
          <img src="/session.png" alt="" />
          {sesssions} Session
        </div>
        <div>
          <img src="/clock-circle.png" alt="" />
          {duration}
        </div>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{pricing}</p>
      </div>
      <div>
        <img src={instructorImage} alt="" />
        {instructorName}{" "}
        <div>
          <img src="/star.png" alt="" />
          <img src="/star.png" alt="" />
          <img src="/star.png" alt="" />
          <img src="/star.png" alt="" />
          <img src="/star.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
