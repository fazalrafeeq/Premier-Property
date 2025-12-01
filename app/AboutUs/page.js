"use client"

import CleaningSection from "@/Components/About/Cleaningsection"
import AboutHero from "@/Components/AboutUs/About-Hero"
import AboutSection from "@/Components/AboutUs/AboutusSec"
import AboutStats from "@/Components/AboutUs/Abt-Statscard"
import Navbar from "@/Components/Heropage/Navbar"
import Topbar from "@/Components/Heropage/Topbar"

export default function AboutUs(){
    return(
               <div>
                <Topbar/>
                <Navbar/>
                <AboutHero/>
                <AboutSection/>
                <AboutStats/>
                <CleaningSection/>
                
               </div>
    )
}