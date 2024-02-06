import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Homepages/HomePage";
import Layout from "./hoc/Layout";
import CDashboard from "./user-cms/components/pages/CDashboard";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="cdashboard" element={<CDashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
