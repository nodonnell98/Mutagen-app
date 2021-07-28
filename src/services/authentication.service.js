import http from "../axios-configuration";

class AuthenticationService {
  login(email, password) {
    let params = {};
    params["user"] = {};

    params["user"]["email"] = email;
    params["user"]["password"] = password;

    return http.post("/users/login", params).then((response) => {
      localStorage.setItem("id", response.data["id"]);
    });
  }

  logout() {
    localStorage.removeItem("id");
    return http.delete("/users/logout");
  }

  loggedIn() {
    return localStorage.getItem("id") !== null;
  }

  register(username, email, password, passwordConfirmation) {
    let params = {};
    params["user"] = {};

    params["user"]["username"] = username;
    params["user"]["email"] = email;
    params["user"]["password"] = password;
    params["user"]["password_confirmation"] = passwordConfirmation;

    return http.post("/users", params);
  }
}

export default new AuthenticationService();
