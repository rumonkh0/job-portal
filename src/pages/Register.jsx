import MailIcon from "../assets/gmail.svg?react";
import LockIcon from "../assets/lock.svg?react";
import FbIcon from "../assets/fb.svg?react";
import GoogleIcon from "../assets/google.svg?react";
import LinkedIcon from "../assets/linkedin.svg?react";
import UserIcon from "../assets/user.svg?react";

function Register() {
  return (
    <div className="w-[1170px] flex justify-around items-stretch">
      <div className="w-[555px] relative flex items-center justify-center text-white bg-blue-500">
        <div className=" relative flex flex-col items-center justify-items-stretch gap-4 z-5">
          <h1 className="text-[40px] font-bold">Welcome back</h1>
          <p className="text-center">
            To start a bright career be connected with employer
          </p>
          <div className="px-12 py-3 bg-white text-black rounded mt-[56px] cursor-pointer">
            Login
          </div>
        </div>
        {/* <img
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          src="/keyboard.png"
          alt="Placeholder"
        /> */}
        <div className="absolute inset-0 bg-blue-600 opacity-72"></div>
      </div>
      <div className="w-[610px] px-18 py-10 flex flex-col justify-between items-center">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-2xl font-semibold pb-10">Register With</h1>
          <div className="flex gap-8 text-gray-500">
            <div className="w-[48px] h-[48px] bg-blue-600 rounded-full p-2">
              <GoogleIcon />
            </div>
            <div className="w-[48px] h-[48px] bg-blue-600 rounded-full p-2">
              <FbIcon />
            </div>
            <div className="w-[48px] h-[48px] bg-blue-600 rounded-full p-2">
              <LinkedIcon />
            </div>
          </div>
          <div className="w-full flex items-center gap-4 mt-15">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
        </div>
        <form className="w-full flex flex-col gap-6 mt-10">
          <div className="relative">
            <input
              className="w-full p-4 pl-13 bg-gray-100"
              type="text"
              placeholder="Name"
            />
            <UserIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
          </div>
          <div className="relative">
            <input
              className="w-full p-4 pl-13 bg-gray-100"
              type="text"
              placeholder="Email or Phone"
            />
            <MailIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
          </div>
          <div className="relative">
            <input
              className="w-full p-4 pl-13 bg-gray-100"
              type="password"
              placeholder="Password"
            />
            <LockIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
          </div>
          <div className="relative">
            <input
              className="w-full p-4 pl-13 bg-gray-100"
              type="password"
              placeholder="Password"
            />
            <LockIcon className="absolute top-4 left-4 w-6 h-6 text-gray-500" />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="text-gray-700 text-sm ">
                Remember password
              </label>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="text-gray-700 text-sm">
                Make profile public to increase visibility
              </label>
            </div>
          </div>
          <div className="px-9 py-4 bg-blue-600 text-white text-center mt-4 mb-10">
            Create my account
          </div>
        </form>
        <div className="text-center">
          <p>
            By clicking ‘Create my account’, you confirm that you agree to
            Company’s
          </p>
          <p>
            <span className="text-blue-500">Terms & Conditions</span> and{" "}
            <span className="text-blue-500">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
