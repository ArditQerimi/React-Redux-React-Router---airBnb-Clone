import PageLayout from "./components/PageLayout/PageLayout";

import HomePage from "./pages/HomePage";
import Details from "./pages/Details";

import Footer from "./components/HomePage/Footer/Footer";

import { Route, Routes, Navigate, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />

        <Route path="/homepage" element={<HomePage />} />
        <Route path="/details/:detailsId" element={<Details />} />
      </Routes>
      {location.pathname === "/homepage" && <Footer />}
    </PageLayout>
  );
}

export default App;
