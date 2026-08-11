import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Admin from "./pages/Admin";
import AdminContent from "./admin/content/AdminContent";
import AdminProjects from "./admin/projects/AdminProjects";
import AdminTrash from "./admin/trash/AdminTrash";
import AdminCaseStudies from "./admin/case-study/AdminCaseStudies";
import AdminHero from "./admin/hero/AdminHero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/admin_hu_yaar",
    element: <Admin />,
    children: [
      {
        path: "/admin_hu_yaar",
        element: <AdminHero />,
      },
      {
        path: "projects",
        element: <AdminProjects />,
      },
      {
        path: "case-studies",
        element: <AdminCaseStudies />,
      },
      {
        path: "content",
        element: <AdminContent />,
      },
      {
        path: "trash",
        element: <AdminTrash />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
