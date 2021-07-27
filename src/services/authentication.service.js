import http from "../axios-configuration";

class AuthenticationDataService {
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

  register(displayName, email, password, passwordConfirmation) {
    let params = {};
    params["user"] = {};

    params["user"]["display_name"] = displayName;
    params["user"]["email"] = email;
    params["user"]["password"] = password;
    params["user"]["password_confirmation"] = passwordConfirmation;

    return http.post("/users", params);
  }
}

export default new AuthenticationDataService();
