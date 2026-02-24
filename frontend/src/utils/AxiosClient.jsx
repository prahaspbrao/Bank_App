const { default: axios } = require("axios");

export const axiosClient = axios.create({
    baseURL : process.env.NEXT_PUBLIC_BASE_URL
})