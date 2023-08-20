import { Routes, Route } from "react-router-dom";
import HeaderMain from "./Layout/Header/HeaderMain";
import FooterMain from "./Layout/Footer/FooterMain";

import Home from "./Pages/Home";
import ListingForm from "./Pages/ListingForm";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddedSuccessfully from "./Pages/AddedSuccessfully";

function App() {
  return (
    <>
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
