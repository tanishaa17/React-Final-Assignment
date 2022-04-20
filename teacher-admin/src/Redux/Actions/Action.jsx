import axios from "axios";
import * as type from "../ActionTypes/Types";

const reqClassData = (payload) => ({ type: type.REQ_CLASS_DATA, payload });
const getClassData = (payload) => ({ type: type.GET_CLASS_DATA, payload });
const reqClassDataFailed = (payload) => ({ type: type.REQ_CLASS_DATA_FAILED, payload });

const signupLoading = (payload) => ({ type: type.SIGNUP_LOADING, payload });
const signupSuccess = (payload) => ({ type: type.SIGNUP_SUCCESS, payload });
const signupFailed = (payload) => ({ type: type.SIGNUP_FAILED, payload });

const loginLoading = (payload) => ({ type: type.LOGIN_LOADING, payload });
const loginSuccess = (payload) => ({ type: type.LOGIN_SUCCESS, payload });
const loginFailed = (payload) => ({ type: type.LOGIN_FAILED, payload });


const getHomePageData = () => async (dispatch) => {
    try {
        dispatch(reqClassData());
        axios.get("https://tanishapi.herokuapp.com/classs").then((res) => {
            dispatch(getClassData(res.data))
        }).catch((error) => {
            dispatch(reqClassDataFailed(error))
        })
    } catch (error) {
        console.log("something went wrong");
    }
}


const userSignup = (user) => async (dispatch) => {
    try {
        dispatch(signupLoading());
        axios.post("https://tanishapi.herokuapp.com/register", user).then((res) => {
            dispatch(signupSuccess(res.data));
        }).catch((error) => {
            dispatch(signupFailed(error));
        })
    } catch (error) {
        console.log("something went wrong");
    }
}


const userLogin = (creds) => async (dispatch) => {
    try {
        dispatch(loginLoading());
        axios.post("https://tanishapi.herokuapp.com/login", creds).then((res) => {
            dispatch(loginSuccess(res.data));
        }).catch((error) => {
            dispatch(loginFailed(error));
        })
    } catch (error) {
        console.log("something went wrong");
    }
}
export { getHomePageData, userSignup, userLogin }
