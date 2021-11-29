import axios from 'axios'

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_STRAPI_URL || ''
})

export default httpClient