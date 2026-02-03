import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";

// Public pages (load immediately)
import Loginpage from "./components/ContactSection/LoginRegister/Loginpage";
import Registerpage from "./components/ContactSection/LoginRegister/Registerpage";

// Private route wrapper
import PrivateRoute from "./PrivateRoute";

// Lazy-loaded pages (heavy ones)
const Mainfolder = lazy(() =>
  import("./components/Dashboard/MainFolder/Mainfolder")
);

const Maincontact = lazy(() =>
  import("./components/ContactSection/Maincontact")
);

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            Loading dashboard...
          </div>
        }
      >
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Public routes */}
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />

          {/* Private routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Mainfolder />
              </PrivateRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Maincontact />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
