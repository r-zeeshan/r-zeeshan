import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="px-5 sm:px-8 pt-40 pb-32 min-h-[70vh]">
      <Seo
        title="Page not found | Zeeshan Hameed"
        description="This page does not exist."
        path="/404"
        noindex
      />
      <div className="max-w-6xl mx-auto">
        <h1 className="t-h1">Page not found</h1>
        <p className="lead mt-4">That address does not lead anywhere on this site.</p>
        <p className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/work" className="link">
            Work
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
