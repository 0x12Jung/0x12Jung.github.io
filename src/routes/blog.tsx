import { createFileRoute } from "@tanstack/react-router";

import Blog from "@/components/blog";

export const Route = createFileRoute("/blog")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Blog />;
}
