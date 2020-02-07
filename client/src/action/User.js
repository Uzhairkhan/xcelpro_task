import axios from "axios";

export const setUser = (user = {}) => {
  return {
    type: "SET_USER",
    payload: user
  };
};

export const startRegUser = (formData, props) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3786/users/register", formData)
      .then((response) => {
        if (response.data.hasOwnProperty("errors")) {
          alert(response.data.message);
        } else {
          alert("successfully registered");
          dispatch(setUser());
          props.history.push("/users/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const startLogUser = (formData, props) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3786/users/login", formData)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          const token = response.data.authToken.token;

          localStorage.setItem("authToken", token);

          Promise.all([
            axios.get("http://localhost:3786/users/account", {
              headers: {
                "x-auth": token
              }
            })
          ]).then((values) => {
            const [userResponse] = values;
            dispatch(setUser(userResponse.data));
            props.history.push("/");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const startGetUser = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3786/users/account", {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then((response) => {
        const user = response.data;
        dispatch(setUser(user));
      });
  };
};

export const startListUser = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3786/users", {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then((response) => {
        const user = response.data;
        dispatch(setUser(user));
      });
  };
};

export const startLogoutUser = () => {
  return (dispatch) => {
    axios
      .delete("http://localhost:3786/users/logout", {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then((response) => {
        dispatch(setUser({}));
        localStorage.removeItem("authToken");
        window.location.href = "/users/login";
      })
      .catch((err) => console.log("inside catch", err));
  };
};
