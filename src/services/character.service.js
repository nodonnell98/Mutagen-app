import http from "../axios-configuration";

class CharacterService {
  index(query) {
    let url = `/characters`;

    if (query !== undefined) {
      url = `${url}?q=${query}`;
    }

    return http.get(url);
  }

  get(id) {
    return http.get(`/characters/${id}`);
  }

  create(character) {
    return http.post(`/characters`, character);
  }

  update(id, params) {
    console.log(params)
    return http.put(`/characters/${id}`, params);
  }

  delete(id) {
    return http.delete(`/characters/${id}`);
  }
}

export default new CharacterService();
