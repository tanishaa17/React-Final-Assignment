import * as types from "../ActionTypes/Types"

const initState = {
    loading: false,
    classData: [],
    error: ""
}
export const dataReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case types.REQ_CLASS_DATA:
            return { ...store, loading: true }
        case types.GET_CLASS_DATA:
            return { ...store, loading: false, classData: payload, error: "" }
        case types.REQ_CLASS_DATA_FAILED:
            return { ...store, loading: false, error: payload.error }
        default:
            return store;
    }
}