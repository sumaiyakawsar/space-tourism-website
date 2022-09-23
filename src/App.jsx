import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Destination from "./pages/Destination/Destination";
import Technology from "./pages/Technology/Technology";
import Crew from "./pages/Crew/Crew";

function App() {
  return (
    <div className="font-normal select-none">
      <Routes>
        <Route exact path="/home" element={<Homepage />}   />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />

        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
