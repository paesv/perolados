import * as types from './mutation-types.js'

export const login = ({commit}, payload) => {
    commit(types.LOGIN, payload)
}

export const logout = ({commit}) => {
    commit(types.LOGOUT)
}