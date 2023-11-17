import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import PlantProfile from "./components/PlantProfile/PlantProfile";
import FullPlantList from "./components/FullPlantList";
import ResponsibleForaging from "./components/ResponsibleForaging/ResponsibleForaging";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/plant/:plantID" element={<PlantProfile />} />
            <Route path="/all-plants" element={<FullPlantList />} />
            <Route
              path="/responsible-foraging"
              element={<ResponsibleForaging />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
