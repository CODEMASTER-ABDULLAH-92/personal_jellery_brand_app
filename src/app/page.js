import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import QuickLinks from "./components/QuickLinks";
import BestSeller from "./components/WeeklyBest";

export default function Home() {
  return (
    <div>
    <Nav/>
    <Hero/>
    <BestSeller/>
    <QuickLinks/>
    <Footer/>
    </div>
  );
}
