import "./App.css";
import "./index.css";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AdminNavbar from "./Components/AdminNavbar/AdminNavbar";

import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import MainPage from "./Page/MainPage/MainPage";
import About from "./Page/About/About";
import Portpolio from "./Page/Portpolio/Portpolio";
import Products from "./Page/Products/Products";
import Request from "./Page/Request/Request";
import Contact from "./Page/Contact/Contact";

import AdminLogin from "./Page/Admin/AdminLogin";
import AdminPosts from "./Page/Admin/AdminPosts";
import AdminEditPost from "./Page/Admin/AdminEditPost";
import AdminCreatePost from "./Page/Admin/AdminCreatePost";
import AdminContacts from "./Page/Admin/AdminContacts";

import Roaster from "./Page/Products/Roaster";
import Plate from "./Page/Products/Plate";
import Others from "./Page/Products/Others";
import Table from "./Page/Products/Table";


function AuthRedirectRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "https://sungha-website.onrender.com/api/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }
  return isAuthenticated ? <Navigate to="/admin/posts" replace /> : <Outlet />;
}

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "https://sungha-website.onrender.com/api/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(response.data.isValid);
        setUser(response.data.user);
      } catch (error) {
        console.log("토큰 인증 실패: ", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }
  return isAuthenticated ? (
    <Outlet context={{ user }} />
  ) : (
    <Navigate to="/admin" replace />
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portpolio",
        element: <Portpolio />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          { index: true, element: <Navigate to="roaster" replace /> }, 
          { path: "roaster", element: <Roaster /> },
           { path: "plate", element: <Plate /> },
          { path: "table", element: <Table /> },
          { path: "others", element: <Others /> },

        ],
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/request",
        element: <Request />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AuthRedirectRoute />,
    children: [{ index: true, element: <AdminLogin /> }],
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: "posts",
            element: <AdminPosts />,
          },
          {
            path: "create-post",
            element: <AdminCreatePost />,
          },
          {
            path: "edit-post/:id",
            element: <AdminEditPost />,
          },
          {
            path: "contacts",
            element: <AdminContacts />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
