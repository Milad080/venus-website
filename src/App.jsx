import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import Jobs from "./pages/Jobs";

function App() {
  const isGitHubPages = window.location.hostname.includes("github.io");
  const basename = isGitHubPages ? "/venus-website" : "/";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="jobs" element={<Jobs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
