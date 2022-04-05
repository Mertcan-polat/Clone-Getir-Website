import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Campaigns from "components/Campaigns";
import Favorites from "components/Favorites";
import MobileApp from "components/MobileApp";
import Cards from "components/Cards";
import Footer from "components/Footer";

function App() {
  return (
    <div className="bg-gray-50">
      <Header></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Campaigns></Campaigns>
      <div className="container mx-auto grid gap-y-6">
        <Favorites></Favorites>
        <MobileApp></MobileApp>
        <Cards></Cards>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
