import React from "react";
import SpecializedCard from "../../components/SpecializedCard";

function Specialized() {
  return (
    <div className="bg-gray-100 py-20 w-full">
      <div className="bg-gray-100 w-[1170px] flex flex-col gap-10 mx-auto">
        <h1 class="title text-3xl font-bold">Specialized Skilled Job</h1>
        <div class="cards flex flex-wrap gap-y-5 gap-x-[30px]">
          {Array.from({ length: 12 }).map((_, index) => (
            <SpecializedCard
              key={index}
              logo="/category.png"
              title="dentist"
              count="204"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specialized;
