import "./App.css";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Modal from "./components/Modal";
import FormModal from "./components/FormModal";
import ContactUs from "./pages/ContactUs";
import BannerProfile from "./components/BannerProfile";
import UserDetailsForm from "./pages/UserDetailsForm";
import FromWorkExperience from "./components/FromWorkExperience";
import FormEducation from "./components/FormEducation";
import FormSkill from "./components/FormSkill";
import CvResumeForm from "./components/CvResumeForm";

function App() {
  return (
    <div className="flex flex-col items-center gap-20">
      {/* <Home /> */}
      {/* <AboutUs/> */}
      {/* <Login/> */}
      {/* <Register /> */}
      {/* <Modal /> */}
      {/* <FormModal /> */}
      {/* <ContactUs/> */}
      {/* <BannerProfile /> */}
      {/* <UserDetailsForm /> */}
      {/* <FromWorkExperience /> */}
      {/* <FormEducation /> */}
      {/* <FormSkill/> */}
      <CvResumeForm/>
    </div>
  );
}

export default App;
