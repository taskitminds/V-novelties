import React from "react";
import { HashRouter as Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>  {/* ✅ Router should be here */}
      <MainLayout />
    </Router>
  );
}

export default App;