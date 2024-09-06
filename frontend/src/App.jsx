import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Home from "../src/ui/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
