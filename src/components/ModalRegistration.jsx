import BadgeIcon from "../assets/badge.svg?react";
import CrossIcon from "../assets/cross.svg?react";
import ModalContainer from "./ModalContainer";
function Modal() {
  return (
    <>
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
    </>
  );
}

export default Modal;
