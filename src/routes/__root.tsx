import Header from "@/components/layout/Header";
import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      {!isHome && <Header />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
