import FinalCallToAction from "./components/FinalCallToAction";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductDisplay from "./components/ProductDisplay";
import Testimonials from "./components/Testimonials";
import VideoIntroduction from "./components/VideoIntroduction";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductDisplay/>
      <Testimonials />
      <VideoIntroduction />
      <FrequentlyAskedQuestions />
      <FinalCallToAction/>
    </main>
  );
}
