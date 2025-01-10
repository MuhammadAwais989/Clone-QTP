import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/header";
import { About } from "./Components/Header/about/about";
import Home from "./Page/Home";
import ContactPage from "./Components/Header/Contact/ContactPage";
import Footer from "./Components/Footer/Footer";
import OfficesPage from "./Components/Header/about/Offices/OfficesPage";
import AimsPage from "./Components/Header/about/Aims/AimsPage";
import DupicateLicense from "./Components/Header/License/DupicateLicense";
import International from "./Components/Header/License/International";
import Permanent from "./Components/Header/License/Permanent";
import LicenseVerification from "./Components/Header/License/LicenseVerification";
import Management from "./Components/Header/Traffic/Management";
import TrafficProblem from "./Components/Header/Traffic/TrafficProblem";
import Challan from "./Components/Header/Traffic/Challan";
import Learner from "./Components/Header/License/Learner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/offices" element={<OfficesPage />} />
          <Route path="/aims" element={<AimsPage/>} />
          <Route path="/driving" element={<LicenseVerification />} />
          <Route path="/driving/duplicate" element={<DupicateLicense/>} />
          <Route path="/driving/International" element={<International/>} />
          <Route path="/driving/learnerPermit" element={<Learner/>} />
          <Route path="/driving/permanent" element={<Permanent/>} />
          <Route path="/driving/verification" element={<LicenseVerification />} />
          <Route path="/traffic" element={<Management />} />
          <Route path="/traffic/managment" element={<Management />} />
          <Route path="/traffic/problem" element={<TrafficProblem />} />
          <Route path="/traffic/challanfine" element={<Challan />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
