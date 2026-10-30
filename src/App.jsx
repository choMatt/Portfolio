import "./styles/global.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Sections from "./components/Sections";

function App() {
  return (
    <>
      <Navigation />
      <main id="top">
        <Hero />
        <Sections />
      </main>
    </>
  );
}

export default App;
