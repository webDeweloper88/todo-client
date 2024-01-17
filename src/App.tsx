import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<AuthRootComponent />} />
        <Route path="/register" element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
