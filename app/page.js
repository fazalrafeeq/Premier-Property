import About from "@/Components/About/About";
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
    </div>
  );
}
