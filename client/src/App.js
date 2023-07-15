import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import FarmerLogin from "./pages/FarmerLogin";
import FarmerSignup from "./pages/FarmerSignup";
import PACLogin from "./pages/PACLogin";
import PACSignup from "./pages/PACSignup";
import MFELogin from "./pages/MFELogin";
import MFESignup from "./pages/MFESignup";
import MFEDashboard from "./pages/MFEDashboard";
import PACDashboard from "./pages/PACDashboard";
import FarmerRequestForm from "./pages/FarmerRequestForm";
import FarmerPrivateRoutes from "./utils/FarmerPrivateRoutes";
import MFEPrivateRoutes from "./utils/MFEPrivateRoutes";
import PACPrivateRoutes from "./utils/PACPrivateRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer/login" element={<FarmerLogin />} />
          <Route path="/farmer/signup" element={<FarmerSignup />} />
          <Route path="/pac/login" element={<PACLogin />}/>
          <Route path="/pac/signup" element={<PACSignup />} />
          <Route path="/mfe/login" element={<MFELogin />} />
          <Route path="/mfe/signup" element={<MFESignup />} />
          <Route element={<FarmerPrivateRoutes />}>
            <Route path="/farmer/RequestForm" element={<FarmerRequestForm />} />
          </Route>
          <Route element={<MFEPrivateRoutes />}>
            <Route path="/mfe/dashboard" element={<MFEDashboard />} />
          </Route>
          <Route element={<PACPrivateRoutes />}>
            <Route path="/pac/dashboard" element={<PACDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
