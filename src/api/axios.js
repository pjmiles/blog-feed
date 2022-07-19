import axios from 'axios'

const baseURL = "https://blog-api344.herokuapp.com/blogposts"

const axiosInstance = axios.create({
    baseURL: baseURL
})


export default axiosInstance