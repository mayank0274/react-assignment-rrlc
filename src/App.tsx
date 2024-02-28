import "./styles/app.scss";
import { Navbar } from "./components/Navbar";
import { MainSection } from "./components/MainSection";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <MainSection />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
