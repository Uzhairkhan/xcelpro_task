import React from "react";
import { connect } from "react-redux";

function Dashboard(props) {
  return (
    <div className="container text-center">
      <h2>Listing Users- {props.user.length} </h2>
      {
        <div style={{ display: "flex" }}>
          {props.user.map((user) => {
            return (
              <div
                className="card text-white bg-info mb-3"
                style={{ width: "18rem" }}
                key={user.id}
              >
                <div className="card-header">Login Details</div>
                <div className="card-body">
                  <p className="card-text"> {user.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Dashboard);
