import "./App.css";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <div className="flex flex-col items-center gap-20">
      {/* <Home /> */}
      {/* <AboutUs/> */}
      {/* <Login/> */}
      <Register />
    </div>
  );
}

export default App;
