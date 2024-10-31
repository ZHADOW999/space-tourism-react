import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "./Loader";
const Layout = () => {
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjusted to 1 second
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {isLoading ? (
        <Loader/>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Layout;