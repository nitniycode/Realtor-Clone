import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Offers from "./Pages/Offers";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
