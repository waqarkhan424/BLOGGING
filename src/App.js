import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import SingleArticle from "./pages/SingleArticle";
import Home from "./pages/Home";
import About from "./pages/About.";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:urlpath" element={<SingleArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
