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
        <Route exact path="/space-tourism-website" element={<Homepage />} />
        <Route
          path="/space-tourism-website/destination"
          element={<Destination />}
        />
        <Route path="/space-tourism-website/crew" element={<Crew />} />
        <Route
          path="/space-tourism-website/technology"
          element={<Technology />}
        />
      </Routes>
    </div>
  );
}

export default App;
