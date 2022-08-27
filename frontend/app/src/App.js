import "./styles/app.scss";
import Dashboard from "./pages/Dashboard";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Financial_Info from "./pages/Personal_Info";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={<Financial_Info />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/budget" element={<Dashboard />} />
          <Route path="/investing" element={<Dashboard />} />
          <Route path="/spending" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
