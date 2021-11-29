import httpClient from "./httpClient"

export const keys = {
    jwt: 'jwt'
}

const saveSessionData = (jwt) => {
    httpClient.defaults.headers.Authorization = `Bearer ${jwt}`
    localStorage.setItem(keys.jwt, jwt)
}

export const signIn = async (email, password) => {
    const result = await httpClient.post('/auth/local', {
        identifier: email,
        password
    })

    const user = result.data.user
    const jwt = result.data.jwt
    saveSessionData(jwt)
    return user
}

export const signOut = () => {
    localStorage.removeItem(keys.jwt)
}

export const checkToken = async () => {
    const jwt = localStorage.getItem(keys.jwt)
    const result = await httpClient('/users/me', {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    console.log(result)
}

export const signUp = async (username, email, password) => {
    const result = await httpClient.post('/auth/local/register', {
        username, password, email
    })

    const user = result.data.user
    const jwt = result.data.jwt

    saveSessionData(jwt)
    return user
}
