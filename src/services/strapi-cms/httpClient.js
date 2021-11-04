import axios from 'axios'

const httpClient = axios.create({
    // TODO: Move url to secret file
    baseURL: 'https://murmuring-dawn-04309.herokuapp.com/' 
})

export default httpClient