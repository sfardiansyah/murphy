import axios from "axios";
import { User } from "./types";

export default {
  login: (credentials: {}): Promise<{ user: User; token: string }> =>
    axios
      .post("http://localhost:8000/api/v1/login", credentials)
      .then((res) => res.data),
};
