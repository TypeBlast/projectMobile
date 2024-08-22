import axios from 'axios';

// Substitua pela URL da sua API
const API_BASE_URL = 'http://10.0.2.2:5000/api'; // Note que o protocolo deve ser HTTP se a API não estiver configurada para HTTPS

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Tempo máximo de espera por uma resposta (10 segundos)
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

const rotas = {
  logUser: (user) => api.post("/auth/login", user),
  postUser: (user) => api.post("/user/", user),
  putUser: (user, id) => api.put(`/user/${id}`, user), // Ajustando para enviar o ID do usuário na rota
  deleteUser: (id) => api.delete(`/user/${id}`),
  getUser: (id) => api.get(`/user/${id}`), // Para buscar um usuário específico
  getAllUsers: () => api.get("/user"), // Para buscar todos os usuários
};

export default rotas;
