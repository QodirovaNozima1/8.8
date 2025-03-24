import axios from "axios"

export const request = axios.create({
    baseURL:"https://furnishing.carwashing.uz/api"
})
request.interceptors.request.use(config => {
    const token = localStorage.getItem("access_token")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})