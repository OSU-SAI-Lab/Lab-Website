import { Routes, Route, Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import TempComponent from "./components/PublicationPage/PublicationPage";
import "./App.css";


function App() {

  return (
    <>
      <NavBar />

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<TempComponent />} />
          <Route path="/people" element={<TempComponent />} />
      </Routes>
    </>
  )
}

export default App
