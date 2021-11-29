import { createAction } from '@reduxjs/toolkit'
import { STRAPI } from '../../services/strapi-cms'

export const checkAuthActions = {
    OK: createAction('[CHECK AUTH] OK'),
    ERROR: createAction('[CHECK AUTH] ERROR'),
    PENDING: createAction('[CHECK AUTH] PENDING')
}

export const checkAuthAsync = () => async dispatch => {
    const { PENDING, ERROR, OK } = checkAuthActions
    dispatch(PENDING())
    try {
        const user = await STRAPI.checkToken()
        dispatch(OK(user))
    } catch (error) {
        console.log(ERROR.type, error.response.data)
        dispatch(ERROR(error.message))
    }
}

export const registerActions = {
    OK: createAction('[REGISTER] OK'),
    ERROR: createAction('[REGISTER] ERROR'),
    PENDING: createAction('[REGISTER] PENDING')
}

export const registerAsync = (username, email, password) => async dispatch => {
    const { PENDING, ERROR, OK } = registerActions
    dispatch(PENDING())
    try {
        const user = await STRAPI.signUp(username, email, password)
        dispatch(OK(user))
    } catch (error) {
        console.log(ERROR.type, error.response.data)
        dispatch(ERROR(error.message))
    }
}

export const loginActions = {
    OK: createAction('[LOGIN] OK'),
    ERROR: createAction('[LOGIN] ERROR'),
    PENDING: createAction('[LOGIN] PENDING')
}

export const loginAsync = (email, password) => async dispatch => {
    const { PENDING, ERROR, OK } = loginActions
    dispatch(PENDING())
    try {
        const user = await STRAPI.signIn(email, password)
        dispatch(OK(user))
    } catch (error) {
        console.log(ERROR.type, error.response) // error.response.data.message[0].messages[0].message
        dispatch(ERROR(error.message))
    }
}