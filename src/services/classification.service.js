import http from "../axios-configuration";

class ClassificationService {
  index(query) {
    let url = `/classifications`;

    if (query !== undefined) {
      url = `${url}?q=${query}`;
    }

    return http.get(url);
  }

  get(id) {
    return http.get(`/classifications/${id}`);
  }

  create(classification) {
    return http.post(`/classifications`, classification);
  }

  update(id, params) {
    return http.put(`/classifications/${id}`, params);
  }

  delete(id) {
    return http.delete(`/classifications/${id}`);
  }
}

export default new ClassificationService();
