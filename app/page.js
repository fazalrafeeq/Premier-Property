import About from "@/Components/About/About";
import About2 from "@/Components/About/About2";
import BlogSection from "@/Components/About/Blogsection";
import CleaningSection from "@/Components/About/Cleaningsection";
import FaqSection from "@/Components/About/Faqsection";
import Footer from "@/Components/About/Footer";
import GetInTouch from "@/Components/About/getintouch";
import ServicesSlider from "@/Components/About/Serivicesslider";
import Stats from "@/Components/About/statscard";
import SubscribeSection from "@/Components/About/Subscribesec";
import BannerSection from "@/Components/Heropage/Banner";
import Navbar from "@/Components/Heropage/Navbar";
import Topbar from "@/Components/Heropage/Topbar";


export default function Home() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <BannerSection/>
      <About/>
      <About2/>
      <Stats/>
      <ServicesSlider/>
      <CleaningSection/>
      <GetInTouch/>
      <FaqSection/>
      <BlogSection/>
      <SubscribeSection/>
      <Footer/>
    </div>
  );
}
