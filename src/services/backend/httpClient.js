import axios from 'axios'

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || '',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest'
    },
})

export default httpClient