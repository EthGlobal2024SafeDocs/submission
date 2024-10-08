import { Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../Header";

export default function PublicLayout() {
  return (
    <div className="container mx-auto">
      <div className="p-2 flex gap-2">
        <Header />
      </div>
      <hr />

      <Outlet />

      {/* <ReactQueryDevtools /> */}
      {/* <TanStackRouterDevtools /> */}
    </div>
  );
}
