import { createReducer, isAnyOf } from '@reduxjs/toolkit'
import { STRAPI } from '../../services/strapi-cms'

import {
    registerActions as register,
    checkAuthActions as check,
    loginActions as login,
} from './actions'

const initialState = {
    loading: false,
    isAuth: false,
    error: null,
    user: null
}

const auth = createReducer(initialState, builder => {
    builder
        .addMatcher(isAnyOf(register.PENDING, login.PENDING, check.PENDING), state => {
            state.loading = true
        })
        .addMatcher(isAnyOf(register.ERROR, login.ERROR, check.ERROR), (state, action) => {
            state.error = action.payload
            state.loading = false
        })
        .addMatcher(isAnyOf(register.OK, login.OK, check.OK), (state, action) => {
            state.user = action.payload
            state.loading = false
            state.isAuth = true
            state.error = null
        })
        .addDefaultCase(() => { })
})

export default auth