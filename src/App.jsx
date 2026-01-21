import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loginpage from "./components/ContactSection/LoginRegister/Loginpage";
import Registerpage from "./components/ContactSection/LoginRegister/Registerpage";
import Mainfolder from "./components/Dashboard/MainFolder/Mainfolder";
import Maincontact from "./components/ContactSection/Maincontact";

function App() {
  return (
    <>

      

      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/dashboard" element={<Mainfolder />} />
           <Route path="/contacts" element={<Maincontact />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
