import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Modal from "./components/ModalRegistration";
import FormModal from "./components/FormModal";
import ContactUs from "./pages/ContactUs";
import BannerProfile from "./components/BannerProfile";
import UserDetailsForm from "./pages/UserDetailsForm";
import FromWorkExperience from "./components/FromWorkExperience";
import FormEducation from "./components/FormEducation";
import FormSkill from "./components/FormSkill";
import CvResumeForm from "./components/CvResumeForm";
import Header from "./sections/header/Header";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center gap-20">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
        <Footer />
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
        {/* <CvResumeForm /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
