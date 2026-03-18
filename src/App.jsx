import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MyAccountPage from "./pages/MyAccountPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/my-account" element={<MyAccountPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
