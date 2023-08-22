import React from "react";
import Sidebar from "../../UI/Sidebar/SideBarTest";

const AdminBash = () => {
  return (
    <div className="d-flex" id="wrapper">
      {/* <!-- Sidebar--> */}
      <Sidebar />
      {/* <!-- Page content wrapper--> */}
      <div className="main" id="page-content-wrapper">
        {/* <!-- Top navigation--> */}
        {/* <Header /> */}
        {/* <!-- Page content--> */}
        <div className="container-fluid content-container">AKeem</div>
      </div>
    </div>
  );
};
export default AdminBash;
