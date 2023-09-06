import Navbar from "./components/Navbar";
import Avatar from "./components/Avatar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 h-screen">
      <Navbar />
      <div className="flex flex-col gap-10 p-10 dark:text-gray-300">
        <Avatar />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
