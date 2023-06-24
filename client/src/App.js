import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddListing from "./Pages/AddListing";
import HeaderMain from "./Layout/Header/HeaderMain";
import FooterMain from "./Layout/Footer/FooterMain";

function App() {
  return (
    <>
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-listing" element={<AddListing />} />
      </Routes>
      <FooterMain />
    </>
  );
}

export default App;
