import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Theatres from "./pages/Theatres";
import SeatLayout from "./pages/SeatLayout";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 h-full min-h-screen m-0 ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theatre" element={<Theatres />} />
        <Route path="/seat" element={<SeatLayout />} />
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
