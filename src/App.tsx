import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/auth/login";
import PrivateRoute from "./utils/router/privateRoute";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
