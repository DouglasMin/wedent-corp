import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { LanguageProvider } from "./contexts/LanguageContext";
import routes from "tempo-routes";

function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
