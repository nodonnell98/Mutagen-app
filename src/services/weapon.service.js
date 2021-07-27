import http from "../axios-configuration";

class WeaponDataService {
  index(query) {
    let url = '/weapons';

    if (query !== undefined) {
      url = `${url}?q=${query}`;
    }

    return http.get(url);
  }

  get(id) {
    return http.get(`/weapons/${id}`);
  }

  create(weapon) {
    return http.post(`/weapons`, weapon);
  }

  update(id, params) {
    return http.put(`/weapons/${id}`, params);
  }

  delete(id) {
    return http.delete(`/weapons/${id}`);
  }
}

export default new WeaponDataService();
