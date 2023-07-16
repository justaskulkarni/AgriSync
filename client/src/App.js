import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/stylesheets/Home.css";
import Home from "./pages/Home";
import FarmerLogin from "./pages/FarmerLogin";
import FarmerSignup from "./pages/FarmerSignup";
import PACLogin from "./pages/PACLogin";
import PACSignup from "./pages/PACSignup";
import MFELogin from "./pages/MFELogin";
import MFESignup from "./pages/MFESignup";
import MFEDashboard from "./pages/MFEDashboard";
import PACDashboard from "./pages/PACDashboard";
import PACViewGradedRequests from "./pages/PACViewGradedRequests";
import FarmerRequestForm from "./pages/FarmerRequestForm";
import FarmerPrivateRoutes from "./utils/FarmerPrivateRoutes";
import MFEPrivateRoutes from "./utils/MFEPrivateRoutes";
import PACPrivateRoutes from "./utils/PACPrivateRoutes";
import FarmerDashboard from "./pages/FarmerDashboard";
import Success from "./pages/Success";
import ChartComponent from "./pages/ChartComponent";
import MFEProducts from "./pages/MFEProducts";
import MFEReturn from "./pages/MFEReturn";
import CPCLogin from "./pages/CPCLogin";
import Feedback from "./pages/Feedback";

import CPCSignup from "./pages/CPCSignup";

import CPCDataAnalytics from "./pages/CPCDataAnalytics";
import ChartComponentnew from "./pages/Chartcomponentnew"
import CPCDashboard from "./pages/CPCDashboard";
import CPCSentToState from "./pages/CPCSentToState"
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="bg-img">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farmer/login" element={<FarmerLogin />} />
            <Route path="/farmer/signup" element={<FarmerSignup />} />
            <Route path="/pac/login" element={<PACLogin />} />
            <Route path="/pac/signup" element={<PACSignup />} />
            <Route path="/mfe/login" element={<MFELogin />} />
            <Route path="/mfe/signup" element={<MFESignup />} />
            <Route path="/cpc/dashboard" element={<CPCDashboard />} />
            <Route path="/cpc/view" element={<CPCSentToState />} />
          <Route path="/cpc/login" element={<CPCLogin />} />
          <Route path="/cpc/signup" element={<CPCSignup />} />

            <Route path="/chart" element={<ChartComponent />} />




            <Route element={<FarmerPrivateRoutes />}>
              <Route
                path="/farmer/requestform"
                element={<FarmerRequestForm />}
              />
            </Route>
            {/* <Route element={<MFEPrivateRoutes />}>
            <Route path="/mfe/dashboard" element={<MFEDashboard />} />
          </Route> */}
            <Route element={<PACPrivateRoutes />}>
              {/* <Route path="/pac/dashboard" element={<PACDashboard />} /> */}
            </Route>
              <Route
                path="/pac/viewgraded"
                element={<PACViewGradedRequests />}
              />
            <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
            <Route path="/success" element={<Success />} />
            <Route path="/mfe/dashboard" element={<MFEDashboard />} />
            <Route path="/mfe/products" element={<MFEProducts />} />
            <Route path="/pac/dashboard" element={<PACDashboard />} />

            <Route path="/feedback" element={<Feedback />} />


          <Route path="/mfe/return" element={<MFEReturn />} />
          <Route path="/dataanalysis" element={<CPCDataAnalytics/>}/>

            <Route path="/mfe/return" element={<MFEReturn />} />
          </Routes>


          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
