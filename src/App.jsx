import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cv/v1" element={<Navigate to="/" replace />} />
      <Route path="/cv/v2" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
