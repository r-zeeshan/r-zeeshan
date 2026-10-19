import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";
import { Button, Container, Diagram, DiagramArrow, DiagramNode, Note } from "@/components/blueprint";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Container className="min-h-[70vh] pb-24 pt-10 md:pt-14">
      <Seo
        title="Page not found | Zeeshan Hameed"
        description="This page does not exist."
        path="/404"
        noindex
      />
      <h1 className="t-display">Page not found</h1>
      <p className="lead mt-4">That address does not lead anywhere on this site.</p>

      <div aria-hidden="true" className="mt-10 flex max-w-xl flex-col gap-3 border-2 border-ink bg-[rgba(255,255,255,0.72)] p-5 sm:p-7">
        <Diagram>
          <DiagramNode>This URL</DiagramNode>
          <DiagramArrow />
          <DiagramNode alert>Nothing here</DiagramNode>
        </Diagram>
        <Note size={22}>wrong turn, the real pages are below</Note>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
        <Button to="/">Home</Button>
        <Button to="/work" variant="link">
          Work →
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
