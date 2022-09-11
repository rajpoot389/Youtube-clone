import "./App.css";
import { Routes, Route } from 'react-router-dom'
import PlaySection from "./components/PlaySection";

import Home from "./Pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<PlaySection />} />
    </Routes>
  );
}

export default App;
