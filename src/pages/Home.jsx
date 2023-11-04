import About from "../components/About/About";
import HeaderFullLogo from "../components/Header/HeaderFullLogo";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MVV from "../components/mission-vision-value/MVV";
import Services from "../components/services/Services";

export default function Home() {
    return (
        <div>
            <Header />
            <HeaderFullLogo />
            <About />
            <MVV />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}