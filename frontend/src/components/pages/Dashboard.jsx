import React, { useContext, useState } from "react";
import Sidebar from "../layout/Sidebar";
import MyBlogs from "../miniComponents/MyBlogs";
import MyProfile from "../miniComponents/MyProfile";
import CreateBlog from "../miniComponents/CreateBlog";
import Chart from "../miniComponents/Chart";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
const Dashboard = () => {
  const [component, setComponent] = useState("MyBlogs");
  const { mode, isAuthenticated } = useContext(Context);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <section
      className={mode === "dark" ? "dark-bg dashboard" : "light-bg dashboard"}
    >
      <Sidebar component={component} setComponent={setComponent} />
      {component === "My Profile" ? (
        <MyProfile />
      ) : component === "Create Blog" ? (
        <CreateBlog />
      ) : component === "Analytics" ? (
        <Chart />
      ) : (
        <MyBlogs />
      )}
    </section>
  );
};

export default Dashboard;