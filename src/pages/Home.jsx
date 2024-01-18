import About from "../components/about/About";
import HeaderFullLogo from "../components/Header/HeaderFullLogo";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import MVV from "../components/mission-vision-value/MVV";
import Services from "../components/services/Services";

export default function Home() {
    return (
        <div>
            <HeaderFullLogo />
            <About />
            <MVV />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}