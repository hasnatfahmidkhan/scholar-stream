import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import FAQ from "./Faq/Faq";
import TopScholarship from "./TopScholarship/TopScholarship";
const Home = () => {
  return (
    <section>
      <Banner />
      <TopScholarship />;
      <Contact />
      <FAQ />
    </section>
  );
};

export default Home;
