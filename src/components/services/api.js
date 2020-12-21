import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export default api;