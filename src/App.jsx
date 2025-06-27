import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import Header from "./sections/header/Header";
import Footer from "./sections/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col items-center gap-20 smoo">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/edit-profile" element={<EditProfile />} />
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
    </Router>
  );
}

export default App;
