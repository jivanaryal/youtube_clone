import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Dashboard from "./components/pages/Dashboard";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
