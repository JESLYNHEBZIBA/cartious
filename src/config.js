import axios from "axios";

export const axiosInstance = axios.create({
baseURL:"https://cartous.herokuapp.com/api/",

});