import * as types from './mutation-types.js'

export const mutations = {
    [types.LOGIN] (state, payload) {
        state.user = payload
    },

    [types.LOGOUT] (state) {
        state.user = null
    }
}