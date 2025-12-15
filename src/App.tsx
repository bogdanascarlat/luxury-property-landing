import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DeveloperSection from "./components/DeveloperSection";
import ImageGallery from "./components/ImageGallery";
import { propertyData } from "./data/propertyData";
import FeaturesGrid from "./components/FeaturesGrid";
import FloorPlans from "./components/FloorPlans";
import LocationSection from "./components/LocationSection";
import InvestmentSection from "./components/InvestmentSection";
import SimilarProperties from "./components/SimilarProperties";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection property={propertyData} />
        <DeveloperSection developer={propertyData.developer} />
        <ImageGallery
          images={propertyData.images}
          virtualTourUrl={propertyData.virtualTour}
          agent={propertyData.agent}
        />
        <FeaturesGrid property={propertyData} />
        <FloorPlans />
        <LocationSection property={propertyData} />
        <InvestmentSection property={propertyData} />
        <SimilarProperties />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
