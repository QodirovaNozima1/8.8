import axios from "axios"

export const request = axios.create({
    baseURL:"https://furnishing.carwashing.uz/api"
})