import React from "react";

function FeatureCard({ name, type, salary, logo, instituteName, location }) {
  return (
    <div className="card">
      <div className="top">
        <h6>{name}</h6>
        <div>
          <p>{type}</p>
          Salary: {salary}
        </div>
      </div>
      <div className="bottom">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h6>{instituteName}</h6>
          <p>{location}</p>
        </div>
        <div>Apply</div>
      </div>
    </div>
  );
}

export default FeatureCard;
