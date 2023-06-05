import { Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Business from "./Components/Business";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Signup />} />
        </Routes>
        <Business />
      </main>
    </React.Fragment>
  );
}

export default App;
