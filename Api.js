import axios from "axios";
import getEnvVars from './environment.js';
const { apiUrl } = getEnvVars();

export default axios.create({
    baseURL: apiUrl,
    responseType: "json"
});