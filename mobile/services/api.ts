import Axios from 'axios';

const api = Axios.create({
    baseURL: "http://192.168.1.109:3333"
});

export default api;