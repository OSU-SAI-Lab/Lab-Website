import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import TempComponent from "./components/PublicationPage/TempComponents";
import PublicationsPage from "./components/PublicationPage/PublicationPage"
import "./App.css";


function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <NavBar />
      <div className={isHomePage ? "" : "page-content"}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<TempComponent />} />
            <Route path="/people" element={<TempComponent />} />
            <Route path="/publications" element={<PublicationsPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
