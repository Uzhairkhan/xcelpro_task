import React from "react";
import FB from "../../../SVG/facebook (9).svg";
import { connect } from "react-redux";
import { startRegUser } from "../../../action/User";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
    this.props.dispatch(startRegUser(formData, this.props));
    this.props.history.push("/users/login");
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          style={{ fontSize: "13px", textAlign: "left" }}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <button
              className="btn form-control"
              style={{ background: "Navy", color: "white" }}
            >
              <img src={FB} style={{ width: "5%" }} alt="" /> &nbsp; Join via
              Facebook
            </button>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email_address">Email address</label>
            <input
              type="text"
              className="form-control"
              id="email_address"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-success form-control">
              Join our Community
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Form);
