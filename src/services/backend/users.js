import httpClient from "./httpClient"

export const keys = {
    jwt: 'jwt'
}

const saveSessionData = (jwt) => {
    httpClient.defaults.headers.Authorization = `Bearer ${jwt}`
    localStorage.setItem(keys.jwt, jwt)
}

export const signIn = async (username, password) => {
    const result = await httpClient.post('/auth/local', {
        username,
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


export const getPerfil = async (username) => {
    try {
        const result = await httpClient(`/api/Perfil/DetailedPerfil?username=${username}`)
        return {
            exists: true,
            perfil: result[0]
        }
    } catch (error) {
        return {
            exists: false,
            perfil: null
        }
    }
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
    await httpClient.post('https://mariel-proxy-backend.herokuapp.com/register', { // /api/Authentication/registro
        username, password, email
    })
    console.log("OK!")
    return {}
    //return await getPerfil(username)
}
