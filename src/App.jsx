import "./App.css";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Modal from "./components/Modal";
import FormModal from "./components/FormModal";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="flex flex-col items-center gap-20">
      {/* <Home /> */}
      {/* <AboutUs/> */}
      {/* <Login/> */}
      {/* <Register /> */}
      {/* <Modal /> */}
      {/* <FormModal /> */}
      <ContactUs/>
    </div>
  );
}

export default App;
