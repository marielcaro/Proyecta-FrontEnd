import httpClient from "./httpClient"

export const crearCuenta = async (email, password) => {
    try {
        const result = await httpClient.post('/auth/local/register', {
            username: email,
            password,
            email
        })

        console.log(result)
    } catch (error) {
        console.log(error)
    }
}