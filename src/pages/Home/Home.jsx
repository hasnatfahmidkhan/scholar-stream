import Container from "../../components/Container/Container";
import Banner from "./Banner/Banner";
import TopScholarship from "./TopScholarship/TopScholarship";
const Home = () => {
  return (
    <section>
      <Container className={"py-10"}>
        <Banner />
        <TopScholarship />
      </Container>
      ;
    </section>
  );
};

export default Home;
