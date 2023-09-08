import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Theatres from "./pages/Theatres";

function App() {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 h-screen m-0 ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theatre" element={<Theatres />} />
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
