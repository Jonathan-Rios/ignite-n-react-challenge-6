import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  // Por o Front e Back estarem no mesma porta, não precisa colocar o endereço completo
});
