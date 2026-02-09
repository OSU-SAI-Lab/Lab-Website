import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import TempComponent from "./components/PublicationPage/TempComponents";
import PublicationsLayout from "./components/PublicationPage/PublicationsLayout";
import PublicationsPage from "./components/PublicationPage/PublicationPage";
import People from "./components/PeoplesPage/PeoplesPage";

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

          <Route path="/people" element={<People />} />

          {/* Publications with subpages */}
          <Route path="/publications" element={<PublicationsLayout />}>
            <Route index element={<PublicationsPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
