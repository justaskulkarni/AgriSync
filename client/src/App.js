import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import FarmerLogin from "./pages/FarmerLogin";
import FarmerSignup from "./pages/FarmerSignup";
import FarmerDashboard from "./pages/FarmerDashboard";
import FarmerPrivateRoutes from "./utils/FarmerPrivateRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer/login" element={<FarmerLogin />} />
          <Route path="/farmer/signup" element={<FarmerSignup />} />
          <Route element={<FarmerPrivateRoutes />}>
            <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
