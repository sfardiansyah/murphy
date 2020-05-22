import axios from "axios";

export default {
  login: (credentials: {}) =>
    axios
      .post("http://localhost:8000/api/v1/login", credentials)
      .then((res) => res.data),
};
