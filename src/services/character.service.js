import http from "../axios-configuration";

class CharacterService {
  index(userId, query) {
    let url = `/characters`;

    if (query !== undefined) {
      url = `${url}?q=${query}`;
    }

    return http.get(url);
  }

  get(userId, id) {
    return http.get(`/characters/${id}`);
  }

  create(userId, weapon) {
    return http.post(`/characters`, weapon);
  }

  update(userId, id, params) {
    return http.put(`/characters/${id}`, params);
  }

  delete(userId, id) {
    return http.delete(`/characters/${id}`);
  }
}

export default new CharacterService();
