import React, { useState } from "react";
import DirectionIcon from "../assets/direction.svg?react";
import UparrowIcon from "../assets/arrow-up.svg?react";
import Banner from "../components/Banner";
import FormUserDetails from "../components/FormUserDetails";
import FormSkill from "../components/FormSkill";
import FromWorkExperience from "../components/FromWorkExperience";
import FormEducation from "../components/FormEducation";
import FormCvResume from "../components/FormCvResume";

function EditProfile() {
  const [step, setStep] = useState(0);
  const steps = [
    <FormUserDetails />,
    <FromWorkExperience />,
    <FormEducation />,
    <FormSkill />,
    <FormCvResume />,
  ];
  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <>
      <Banner
        title="My profile"
        description="This is your personal information that you can update anytime"
      />
      <div>
        {steps[step]}
        <div className="w-full pt-14 flex justify-between items-center">
          {step > 0 ? (
            <button
              onClick={prevStep}
              className="px-6.5 py-3 flex items-center gap-2 bg-gray-100 rounded"
            >
              <DirectionIcon />
              Back
            </button>
          ) : (
            <div></div>
          )}

          {step < steps.length - 1 ? (
            <button
              onClick={nextStep}
              className="px-6.5 py-3 flex items-center gap-2 bg-blue-700 text-white rounded"
            >
              Next
              <DirectionIcon className="rotate-180" />
            </button>
          ) : (
            <button className="px-6.5 py-3 flex items-center gap-2 bg-blue-700 text-white rounded">
              Save Your Profile
              <UparrowIcon className="-rotate-90" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default EditProfile;
