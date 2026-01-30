import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import TempComponent from "./components/PublicationPage/TempComponents";
<<<<<<< HEAD
import PublicationsPage from "./components/PublicationPage/PublicationPage";
import PeoplesPage from "./components/PeoplesPage/PeoplesPage";
import EventsPage from "./components/EventsPage/EventsPage";
=======
import PublicationsLayout from "./components/PublicationPage/PublicationsLayout";
import PublicationsPage from "./components/PublicationPage/PublicationPage";
import PublicationDetail from "./components/PublicationPage/PublicationDetail";
>>>>>>> 06dc432693121255f8debcd7ee5af36dcdec6867
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
<<<<<<< HEAD
          <Route path="/people" element={<PeoplesPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/events" element={<EventsPage />} />

=======
          <Route path="/people" element={<TempComponent />} />

          {/* Publications with subpages */}
          <Route path="/publications" element={<PublicationsLayout />}>
            <Route index element={<PublicationsPage />} />
            <Route path=":id" element={<PublicationDetail />} />
          </Route>
>>>>>>> 06dc432693121255f8debcd7ee5af36dcdec6867
        </Routes>
      </div>
    </>
  );
}

export default App;
