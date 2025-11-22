import AboutVenus from "../features/Homepage/AboutVenus";
import Clients from "../features/Homepage/Clients";
import FrequentlyAskedQu from "../features/Homepage/FrequentlyAskedQu";
import HeroSlider from "../features/Homepage/HeroSlider";
import ServicesSolutions from "../features/Homepage/ServicesSolutions";
import TypesOfInnovationServices from "../features/Homepage/TypesOfInnovationServices";
import TypesOfProvidedServices from "../features/Homepage/TypesOfProvidedServices";
import Footer from "../ui/Footer";

function Home() {
  return (
    <>
      <HeroSlider />
      <AboutVenus />
      <TypesOfProvidedServices />
      <ServicesSolutions />
      <Clients />
      <TypesOfInnovationServices />
      <FrequentlyAskedQu />
      <Footer />
    </>
  );
}

export default Home;
