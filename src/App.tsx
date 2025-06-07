import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/AboutUs";
import Market from "./components/Market";
import Education from "./components/Education";
import Contact from "./components/Contact";
import NavigationMenu from "./components/NavigationMenu";
import { LanguageProvider } from "./contexts/LanguageContext";
import routes from "tempo-routes";

function App() {
  return (
    <LanguageProvider>
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(46, 134, 171, 0.95) 0%, rgba(29, 53, 87, 0.92) 100%), url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <NavigationMenu />
        <Suspense fallback={<p>Loading...</p>}>
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/market" element={<Market />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </>
        </Suspense>
      </div>
    </LanguageProvider>
  );
}

export default App;
