import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ListingForm from "./Pages/ListingForm";
import AddedSuccessfully from "./Pages/AddedSuccessfully";
import HeaderMain from "./Layout/Header/HeaderMain";
import FooterMain from "./Layout/Footer/FooterMain";

function App() {
  return (
    <>
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-listing" element={<ListingForm />} />
        <Route
          path="/listing-added-successfully"
          element={<AddedSuccessfully />}
        />
      </Routes>
      <FooterMain />
    </>
  );
}

export default App;
