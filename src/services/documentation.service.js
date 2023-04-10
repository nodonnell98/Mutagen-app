import http from "../axios-configuration";

class DocumentationDataService {
  index(query) {
    let url = '/documentation';

    if (query !== undefined) {
      url = `${url}?q=${query}`;
    }

    return http.get(url);
  }

  get(id) {
    return http.get(`/documentation/${id}`);
  }

  create(weapon) {
    return http.post(`/documentation`, weapon);
  }

  update(id, params) {
    return http.put(`/documentation/${id}`, params);
  }

  delete(id) {
    return http.delete(`/documentation/${id}`);
  }
}

export default new DocumentationDataService();
