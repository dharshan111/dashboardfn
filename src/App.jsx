import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";

// Public pages (eager)
import Loginpage from "./components/ContactSection/LoginRegister/Loginpage";
import Registerpage from "./components/ContactSection/LoginRegister/Registerpage";

// Auth wrapper
import PrivateRoute from "./PrivateRoute";

// Lazy pages (heavy)
const Mainfolder = lazy(() =>
  import("./components/Dashboard/MainFolder/Mainfolder")
);

const Maincontact = lazy(() =>
  import("./components/ContactSection/Maincontact")
);

// Loader component
const Loader = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "18px",
    }}
  >
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public */}
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />

        {/* Private: Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Suspense fallback={<Loader />}>
                <Mainfolder />
              </Suspense>
            </PrivateRoute>
          }
        />

        {/* Private: Contacts */}
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Suspense fallback={<Loader />}>
                <Maincontact />
              </Suspense>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
