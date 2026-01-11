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
import Header from "./components/Dashboard/MainFolder/HeadSide/Header";
// import Sidebar from "./components/Dashboard/MainFolder/HeadSide/Sidebar";
import Barchart from "./components/Dashboard/MainFolder/HeadSide/Barchart";
import PieCharts from "./components/Dashboard/MainFolder/HeadSide/Secondchart";
import Centercard from "./components/Dashboard/MainFolder/HeadSide/Centercard";
import ThirdCharts from "./components/Dashboard/MainFolder/HeadSide/ThirdCharts";
import FourthCharts from "./components/Dashboard/MainFolder/HeadSide/FourthCharts";
import Mapsection from "./components/Dashboard/MainFolder/HeadSide/Mapsection";
import Databox from "./components/Dashboard/MainFolder/HeadSide/Databox";
import Tablecontent from "./components/Dashboard/MainFolder/HeadSide/Tablecontent";
function App() {
  return (
    <>
      {/* <Contactheader /> */}
      {/* <Map /> */}
      {/* <Contact /> */}

      <Header />
      <Barchart />
      <PieCharts />
      <Centercard />
      <ThirdCharts />
      <FourthCharts />
      <Mapsection />
      <Tablecontent />
      {/* <Databox /> */}

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
