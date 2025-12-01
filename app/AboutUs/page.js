"use client"

import CleaningSection from "@/Components/About/Cleaningsection"
import Footer from "@/Components/About/Footer"
import SubscribeSection from "@/Components/About/Subscribesec"
import ClientLogos from "@/Components/AboutUs/About-clnt-logos"
import AboutHero from "@/Components/AboutUs/About-Hero"
import AboutCleaningSection from "@/Components/AboutUs/About-service-2"
import AboutSection from "@/Components/AboutUs/AboutusSec"
import AboutStats from "@/Components/AboutUs/Abt-Statscard"
import ServiceGallery from "@/Components/AboutUs/Servicegaller"
import Navbar from "@/Components/Heropage/Navbar"
import Topbar from "@/Components/Heropage/Topbar"

export default function AboutUs(){
    return(
               <div className="bg-white" >
                <Topbar/>
                <Navbar/>
                <AboutHero/>
                <AboutSection/>
                <AboutStats/>
                <CleaningSection/>
                <ServiceGallery/>
                <AboutCleaningSection/>
                <ClientLogos/>
                <SubscribeSection/>
                <Footer/>
               </div>
    )
}