import Contact from "./components/ContactSection/Contact";
import Map from "./components/ContactSection/Map";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contactheader from "./components/ContactSection/Contactheader";
import Loginpage from "./components/ContactSection/LoginRegister/Loginpage";
import Registerpage from "./components/ContactSection/LoginRegister/Registerpage";
import Mainfolder from "./components/Dashboard/MainFolder/Mainfolder";
function App() {
  return (
    <>
      {/* <Contactheader /> */}
      {/* <Map /> */}
      {/* <Contact /> */}

      <Mainfolder sx={{width:"100%"}}/>

      {/* <Sidebar /> */}
      
      {/* <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
