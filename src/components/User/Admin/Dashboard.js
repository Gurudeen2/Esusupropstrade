import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../UI/Sidebar/SideBarTest";
import Account from "../Account/Account";
import BuyAirtime from "../Airtime/BuyAirtime";
import NetworkProvider from "./Network/Network";
import NavHeader from "../../UI/Header/Header";
import BuyData from "../Data/BuyData";
import DataPrice from "./DataPricing/DataPrice";

const Dashboard = () => {
  return (
    <div className="d-flex" id="wrapper">
      {/* <!-- Sidebar--> */}
      <Sidebar />
      {/* <!-- Page content wrapper--> */}
      <div style={{ width: "100%" }}>
        <NavHeader />
        <div
          className="container-fluid content-container"
          style={{ paddingLeft: "3rem" }}
        >
          <Routes>
            <Route path="/dashboard" Component={Account} />
            <Route path="/demo/opportunity" Component={Opportunity} />
            <Route path="/demo/dashboard" Component={DemoDashboard} />
            <Route path="/demo/profile" Component={Profile} />
            <Route path="/demo/deposit" Component={Deposit} />
            <Route path="/demo/transaction" Component={Transaction} />
            <Route path="/demo/twofactor" Component={FactorAuth} />
            <Route path="/demo/secondarymarket" Component={SecondaryMarket} />

            <Route
              path="/demo/opportunity/:appartmentName"
              Component={SingleOpport}
            />

            <Route path="/airtime" Component={BuyAirtime} />
            <Route path="/addnetwork" Component={NetworkProvider} />
            <Route path="/data" Component={BuyData} />
            <Route path="/datapricing" Component={DataPrice} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
