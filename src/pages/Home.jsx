import Courses from "../sections/courses/Courses";
import Stats from "../sections/stats/Stats";
import Featured from "../sections/featured/Featured";
import Specialized from "../sections/specialized/Specialized";
import Category from "../sections/category/Category";
import Footer from "../sections/footer/Footer";
import Header from "../sections/header/Header";
import Hero from "../sections/hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Specialized />
      <Featured />
      <Stats />
      <Courses />
    </>
  );
}

export default Home;
