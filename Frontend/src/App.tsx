import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
