import http from "../axios-configuration";

class UserService {
  index(query) {
    let url = `/users`;

    if (query !== undefined) {
      url = `${url}?q=${query}`;
    }

    return http.get(url);
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(user) {
    return http.post(`/users`, user);
  }

  update(id, params) {
    return http.put(`/users/${id}`, params);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }
}

export default new UserService();
