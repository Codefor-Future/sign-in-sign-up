import axios from 'axios'
const BASE_URL = 'http://13.127.127.40/api';

export const login = (payload) => {
    return dispatch => {
        // TODO login API call with axios
        let { email, password } = payload

        axios.post(`${BASE_URL}/token/`, {
                email,
                password
            })
            .then((res) => {
                console.log(res)
                if (res.status !== 200) throw new Error(res.data.message)
                    // TODO update the userDetails obj from data from res.
                let userDetails = {
                    first_name: '',
                    last_name: '',
                    email: email,
                    password: password
                }
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload:userDetails
                })
            })
            .catch((err) => {
                let userDetails = {
                    first_name: '',
                    last_name: '',
                    email: email,
                    password: password
                }
                console.log(err)
                dispatch({
                    type: "LOGIN_FAILED",
                    payload:{
                        userDetails,
                        msg:err.message
                    }
                })
            })
    }
}

export const signUp = (payload) => {
    return dispatch => {
        // TODO login API call with axios
        let { email, password } = payload
        let first_name = payload.firstName;
        let last_name = payload.lastName

        axios.post(`${BASE_URL}/user/`, {
                email,
                password,
                first_name,
                last_name
            })
            .then((res) => {
                console.log(res)
                if (res.status !== 200) throw new Error(res.response)
                // TODO update the userDetails obj from data from res.
                let userDetails = {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password
                }
                dispatch({
                    type: "SIGNUP_SUCCESS",
                    payload:{
                        userDetails,
                        msg: res.data.message
                    }
                })
            })
            .catch((err) => {
                console.log(err.response)
                let userDetails = {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password
                }
                dispatch({
                    type: "SIGNUP_FAILED",
                    payload:{
                        userDetails,
                        msg: err.response.message
                    }
                })
            })
    }
}