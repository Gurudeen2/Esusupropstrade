import React from "react";
import classes from "./Footer2.module.css";

const Footer = () => (
  <footer
    className="page-footer font-small blue pt-4"
    style={{ background: "#292d3d", color: "#fff" }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">SimTopper</h5>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li>
              <a href="/about" className={classes.link}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" className={classes.link}>
                Contact
              </a>
            </li>
            <li>
              <a href="#!" className={classes.link}>
                Privary Policy
              </a>
            </li>
            <li>
              <a href="#!" className={classes.link}>
                List Your Property
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          {/* <h5 className="text-uppercase">Links</h5> */}
          <ul className="list-unstyled">
            <li>
              <a href="#!" className={classes.link}>
                Term of use
              </a>
            </li>
            <li>
              <a href="#!" className={classes.link}>
                AML Policy
              </a>
            </li>
            <li>
              <a href="/howitworks" className={classes.link}>
                How it works
              </a>
            </li>
            <li>
              <a href="#!" className={classes.link}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr style={{ color: "#fff" }} />
    {/* <div
      className="footer-copyright text-center py-3"
      style={{ fontSize: "14px" }}
    >
      The services included in this site are provided by EsusuProp Trade
      Platform Ltd, a company registered in St Vincent and the Grenadines under
      Licence number 24762 IBC 2018
    </div> */}
  </footer>
);

export default Footer;
