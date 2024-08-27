import axios from 'axios';
import { Platform } from 'react-native';

const LOCAL_IP = '192.168.56.1'; // Troque 192.168.x.x pelo IP correto

// Caso específico para Android Emulator (10.0.2.2)
// Usamos uma verificação simples para o emulador no Android
const API_BASE_URL = Platform.OS === 'android' && Platform.Version < 31
  ? `http://10.0.2.2:5000/api`
  : `http://${LOCAL_IP}:5000/api`;

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
  putUser: (user, id) => api.put(`/user/${id}`, user),
  deleteUser: (id) => api.delete(`/user/${id}`),
  getUser: (id) => api.get(`/user/${id}`),
  getAllUsers: () => api.get("/user"),
};

export default rotas;
