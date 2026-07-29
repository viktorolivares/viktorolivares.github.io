import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import CvV1Page from "./pages/cv/CvV1Page";
import HomePage from "./pages/HomePage";

const RouteLoader = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="route-loader-overlay"
      role="status"
      aria-live="polite"
      aria-label="Cambiando vista"
    >
      <div className="route-loader-card">
        <div className="route-loader-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = useState(true);

  useEffect(() => {
    setIsRouteLoading(true);
    const timer = window.setTimeout(() => {
      setIsRouteLoading(false);
    }, 520);

    return () => {
      window.clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <>
      <RouteLoader visible={isRouteLoading} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv/v1" element={<CvV1Page />} />
        <Route path="/cv/v2" element={<Navigate to="/cv/v1" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
