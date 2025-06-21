import React from "react";

function SpecializedCard({ logo, title, count }) {
  return (
    <div className="card">
      <div className="card_logo">
        <img src={logo} alt="logo" />
      </div>
      <p className="card_title">{title}</p> |
      <p className="card_count">{count}</p>
    </div>
  );
}

export default SpecializedCard;
