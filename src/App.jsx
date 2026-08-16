import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import HelVoxCaseStudy from "./pages/HelVoxCaseStudy";
import OdyssoCaseStudy from "./pages/OdyssoCaseStudy";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/helvox" element={<HelVoxCaseStudy />} />
        <Route path="/work/odysso" element={<OdyssoCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}
