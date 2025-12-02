import Footer from "@/Components/About/Footer";
import SubscribeSection from "@/Components/About/Subscribesec";
import BlogAbout from "@/Components/Blog/Blog-about";
import BlogHero from "@/Components/Blog/Blog-Home";
import Navbar from "@/Components/Heropage/Navbar";
import Topbar from "@/Components/Heropage/Topbar";

export default function Blog(){
    return(
        <div className="bg-white" >
            <Topbar/>
            <Navbar/>
            <BlogHero/>
            <BlogAbout/>
            <SubscribeSection/>
            <Footer/>
        </div>
    )
}