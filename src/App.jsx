import "./App.css";
import "./index.css";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AdminNavbar from "./Components/AdminNavbar/AdminNavbar";

import { useEffect, useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import axios from "axios";

import ScrollToTop from "./Components/ScrollToTop";

import MainPage from "./Page/MainPage/MainPage";
import About from "./Page/About/About";
import Portpolio from "./Page/Portpolio/Portpolio";
import Products from "./Page/Products/Products";
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

const RequestPage = lazy(() => import("./Page/Request/Request"));

/* ======================
   관리자 인증 (로그인 체크)
======================== */

function ProtectedRoute() {
  const [isLoading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.post(
          "https://sungha-website.onrender.com/api/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setAuth(res.data.isValid);
        setUser(res.data.user);
      } catch {
        setAuth(false);
      } finally {
        setLoading(false);
      }
    };
    verify();
  }, []);

  if (isLoading) return null;

  return isAuth ? <Outlet context={{ user }} /> : <Navigate to="/admin" replace />;
}

/* ======================
   /admin 진입 시 처리
   (로그인 여부 → 이동 결정)
======================== */

function AdminLoginRedirect() {
  const [state, setState] = useState({ loading: true, authed: false });

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.post(
          "https://sungha-website.onrender.com/api/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setState({ loading: false, authed: res.data.isValid });
      } catch {
        setState({ loading: false, authed: false });
      }
    };
    verify();
  }, []);

if (state.loading) return <div className="text-center mt-40 text-white">Loading...</div>;


  return state.authed ? (
    <Navigate to="/admin/posts" replace />
  ) : (
    <AdminLogin />
  );
}

/* ======================
   Layouts
======================== */

function MainLayout() {
  return (
    <>
      <ScrollToTop />
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

/* ======================
   Router 설정
======================== */

/* ======================
   /admin 라우팅 시스템
======================== */

const router = createBrowserRouter([
  /* 사용자 페이지 */
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "about", element: <About /> },
      { path: "portpolio", element: <Portpolio /> },
      { path: "products", element: <Products /> },
      {
        path: "products",
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
        path: "request",
        element: (
          <Suspense fallback={<div className="text-center mt-20">로딩중…</div>}>
            <RequestPage />
          </Suspense>
        ),
      },
      { path: "contact", element: <Contact /> },
    ],
  },

  /* ======= 관리자 페이지 ======= */

  /* 1) 로그인 화면 */
  {
    path: "/admin/login",
    element: <AdminLoginRedirect />, // 로그인 여부 체크 → 로그인화면 or posts
  },

  /* 2) /admin 접근할 때 자동분기 */
  {
    path: "/admin",
    element: <Navigate to="/admin/login" replace />,
  },

  /* 3) 보호된 관리자 영역 */
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "posts", element: <AdminPosts /> },
          { path: "create-post", element: <AdminCreatePost /> },
          { path: "edit-post/:id", element: <AdminEditPost /> },
          { path: "contacts", element: <AdminContacts /> },
        ],
      },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
