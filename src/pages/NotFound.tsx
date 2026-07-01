import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--cream)] px-5">
      <div className="text-center">
        <h1 className="font-display text-6xl font-medium mb-3 text-[var(--ink)]">404</h1>
        <p className="lead mb-6">This page wandered off. Let&apos;s get you back.</p>
        <a href="/" className="btn btn-primary">
          <span>Return home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
