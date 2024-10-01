import Image from "next/image";
import Navbar from "@/components/common/Navbar/page";
// import dslogo from "../../public/assets/DSlogo.svg";
import AboutUs from "@/components/HeroSection/AboutUs/page";
import Services from "@/components/HeroSection/Services/page";
import Client from "@/components/HeroSection/Clients/page";
import Testimonials from "@/components/HeroSection/Testimonials/page";
import Contactus from "@/components/HeroSection/Contactus/page";
import Footer from "@/components/common/Footer/page";


export default function Home() {
  return (
    <main>
      <div>
        {/* <img src={dslogo} className="w-40 bg-slate-100" alt="img" /> */}
        <Navbar/>
        <AboutUs/>
        <Services/>
        <Client/>
        <Testimonials/>
        <Contactus/>
        <Footer/>
        
      </div>
    </main>
  );
}
