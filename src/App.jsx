import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 h-screen m-0 ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/carousel" element={<Carousel />} /> */}
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
