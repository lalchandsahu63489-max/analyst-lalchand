import { Outlet } from "react-router-dom";
import AdminLayout from "../admin/layout/AdminLayout";

const Admin = () => {
  return (
    <>
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    </>
  );
};

export default Admin;
