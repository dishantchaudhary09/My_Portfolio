
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievement";

// Case Studies
import LandslideCaseStudy from "./pages/LandslideCaseStudy";
import CollectionMakerCaseStudy from "./pages/CollectionMakerCaseStudy";
import BookstoreCaseStudy from "./pages/BookstoreCaseStudy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

          {/* Case Studies */}
          <Route
            path="/case-study/landslide"
            element={<LandslideCaseStudy />}
          />

          <Route
            path="/case-study/collectionmaker"
            element={<CollectionMakerCaseStudy />}
          />

          <Route
            path="/case-study/bookstore"
            element={<BookstoreCaseStudy />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
