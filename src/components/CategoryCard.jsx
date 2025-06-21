import React from "react";

function CategoryCard({ logo, name, jobsPosted }) {
  return (
    <div class="card">
      <div class="logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{jobsPosted}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
