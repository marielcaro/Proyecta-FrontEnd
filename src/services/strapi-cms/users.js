import httpClient from "./httpClient"

const keys = {
    jwt: 'jwt',
    user: 'users'
}

const saveSessionData = (user, jwt) => {
    httpClient.defaults.headers.Authorization = `Bearer ${jwt}`
    localStorage.setItem(keys.user, JSON.stringify(user))
    localStorage.setItem(keys.jwt, jwt)
}

export const iniciarSesion = async (email, password) => {
    // TODO: Add SweetAlert
    try {
        const resultado = await httpClient.post('/auth/local', {
            identifier: email,
            password
        })

        const user = resultado.data.user
        const jwt = resultado.data.jwt
        saveSessionData(user, jwt)
        alert('Sesion iniciada!')
    } catch (error) {
        console.log(error)
        alert('Error!')
    }
}

export const cerrarSesion = () => {
    localStorage.removeItem(keys.jwt)
    localStorage.removeItem(keys.user)
}

export const crearCuenta = async (username, email, password) => {
    try {
        const resultado = await httpClient.post('/auth/local/register', {
            username, password, email
        })

        const user = resultado.data.user
        const jwt = resultado.data.jwt
        saveSessionData(user, jwt)
        alert('Cuenta creada!')
    } catch (error) {
        console.log(error)
    }
}