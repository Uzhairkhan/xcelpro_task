import React from "react";
import FB from "../../../SVG/facebook (9).svg";
import { connect } from "react-redux";
import { startLogUser } from "../../../action/User";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const logUser = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.dispatch(startLogUser(logUser, this.props));
    console.log(logUser, "props", this.props);
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
              <img src={FB} style={{ width: "5%" }} alt="" /> &nbsp; Login via
              Facebook
            </button>
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
              Login into our Community
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Form);
