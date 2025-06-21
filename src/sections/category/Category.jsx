import React from "react";
import CategoryCard from "../../components/CategoryCard";

function Category() {
  return (
    <div>
      <div className="title">
        <h1>Browse Jobs by Category </h1>
        <p>
          Explore employment opportunities categorized by industry,
          specialization, or field of expertise
        </p>
      </div>
      <div className="sections">
        <CategoryCard
          logo="/category.png"
          name="Software Development"
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Development"
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Development"
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Development"
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Development"
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Development"
          jobsPosted="1,000+ jobs posted"
        />
      </div>
    </div>
  );
}

export default Category;
