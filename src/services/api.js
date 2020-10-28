import Axios from 'axios';

const url = 'http://127.0.0.1:5000'

export const api = Axios.create({
    baseURL: url
});