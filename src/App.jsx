import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Paralax</section>
      <section>Services</section>
      <section>Paralax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
