import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import MyNavbar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import PicturesPage from "./pages/PicturesPage";
import RestaurantPage from "./pages/RestaurantPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/PicturesPage" element={<PicturesPage />} />
        <Route path="/RestaurantPage" element={<RestaurantPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
