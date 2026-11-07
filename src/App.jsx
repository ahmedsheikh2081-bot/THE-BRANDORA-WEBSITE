
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="w-full min-w-0">
        <Home />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
