import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../../../PNG/Sign up bg.png";
import Form from "./Form";

function Show(props) {
  return (
    <div>
      <div className="container mx-auto">
        <div className="row">
          <div
            className="col-md-6"
            style={{ textAlign: "center", width: "200px", paddingTop: "80px" }}
          >
            <img src={SignUp} className="img-fluid" alt="" />
          </div>
          <div
            className="col-md-6"
            style={{ textAlign: "center", width: "300px", padding: "80px" }}
          >
            <h4
              style={{
                fontWeight: "bold",
                fontStyle: "Arial Rounded MT Bold",
                padding: "40px"
              }}
            >
              Join our Community!
            </h4>

            <p>
              Already have an account? <Link to="/users/login">Login</Link>
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

export default Show;
