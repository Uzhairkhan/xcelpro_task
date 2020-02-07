import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import LogIn from "../../../PNG/login bg.png";

function LogShow(props) {
  return (
    <div>
      <div className="container mx-auto">
        <div className="row">
          <div
            className="col-md-6"
            style={{ textAlign: "center", width: "300px", paddingTop: "80px" }}
          >
            <img src={LogIn} className="img-fluid" alt="" />
          </div>
          <div
            className="col  justify-content-end"
            style={{ textAlign: "center", width: "300px", padding: "80px" }}
          >
            <h4
              style={{
                fontWeight: "bold",
                fontStyle: "Arial Rounded MT Bold",
                padding: "40px"
              }}
            >
              Login into our Community!
            </h4>

            <p>
              Dont have an account? <Link to="/users/register">Sign-Up</Link>
            </p>
            <Form {...props} />
            <p>
              By joining, you agree to <b>Terms</b> and <b>Privacy Policy</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogShow;
