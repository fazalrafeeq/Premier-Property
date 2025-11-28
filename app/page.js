import About from "@/Components/About/About";
import About2 from "@/Components/About/About2";
import Stats from "@/Components/About/statscard";
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
    </div>
  );
}
