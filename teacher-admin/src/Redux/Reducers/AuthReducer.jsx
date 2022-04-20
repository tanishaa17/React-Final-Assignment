import * as types from "../ActionTypes/Types"

const initState = {

    loading: false,
    error: "",
    user: {},
    isAuthenticated: false
}
export const authReducer = (store = initState, { type, payload }) => {

    switch (type) {
        case types.SIGNUP_LOADING:
            return { ...store, loading: true, isAuthenticated: false }
        case types.SIGNUP_SUCCESS:
            return { ...store, loading: false, isAuthenticated: true }
        case types.SIGNUP_FAILED:
            return { ...store, loading: false, error: payload.error }

        case types.LOGIN_LOADING:
            return { ...store, loading: true, isAuthenticated: false }
        case types.LOGIN_SUCCESS:
            return { ...store, loading: false, accessToken: payload.accessToken, user: payload.user }
        case types.LOGIN_FAILED:
            return { ...store, loading: false, error: payload.error }


        case types.LOGOUT:
            return { initState, accessToken: null }
        default:
            return store;

    }

}