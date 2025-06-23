import BadgeIcon from "../assets/badge.svg?react";
import CrossIcon from "../assets/cross.svg?react";
function Modal() {
  return (
    <div className="relative py-10 px-15 flex flex-col items-center gap-6 rounded-lg mt-44">
      <div>
        <BadgeIcon />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="font-semibold text-2xl">Registered Successfully</div>
        <div className="text-center text-gray-500">
          <p>Thanks for registration.</p>
          <p>You can find your job easily.</p>
        </div>
      </div>
      <div className="bg-blue-600 text-white px-10 py-4 rounded">Search Job Now</div>
      <div className="absolute w-14 h-14 bg-gray-400 rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer">
        <CrossIcon />
      </div>
    </div>
  );
}

export default Modal;
