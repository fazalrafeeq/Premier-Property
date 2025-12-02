import Footer from "@/Components/About/Footer";
import ContactSection from "@/Components/Contacts/Contacts-about";
import ContactsHero from "@/Components/Contacts/ContactsHero";
import MapSection from "@/Components/Contacts/Map";
import Navbar from "@/Components/Heropage/Navbar";
import Topbar from "@/Components/Heropage/Topbar";

export  default function Contacts(){
    return(
        <div className="bg-white" >
            <Topbar/>
            <Navbar/>
            <ContactsHero/>
            <ContactSection/>
            <MapSection/>
            <Footer/> 
        </div>
    )
}