/** IMPORT DEPENDENCIES */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** import all components */
import Username from "./components/Username";
import Password from "./components/Password";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/Navbar";

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from "./middleware/auth";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        Root Element
      </div>
    ),
  },
  {
    path: "/username",
    element: <Username />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password",
    element: (
      <ProtectRoute>
        <Password />
      </ProtectRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default function App() {
  return (
    <main>
      {/* <Navbar /> */}
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
