import axios from 'axios'
const BASE_URL = 'https://3.140.210.76:8000/api';

export const login = (payload) => {
    return dispatch => {
        // TODO login API call with axios
        let { email, password } = payload

        axios.post(`${BASE_URL}/token`, {
                email,
                password
            })
            .then((res) => {
                console.log(res.status)
                if (res.status !== 200) throw new Error(res.response)
                    // TODO update the userDetails obj from data from res.
                let userDetails = {
                    first_name: 'updated',
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
                dispatch({
                    type: "LOGIN_FAILED",
                    payload:userDetails
                })
            })
    }
}

export const signUp = (payload) => {
    return dispatch => {
        // TODO login API call with axios
        let { email, password, first_name, last_name } = payload

        axios.post(`${BASE_URL}/user`, {
                email,
                password,
                first_name,
                last_name
            })
            .then((res) => {
                console.log(res.status)
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
                    payload:userDetails
                })
            })
            .catch((err) => {
                let userDetails = {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password
                }
                dispatch({
                    type: "SIGNUP_FAILED",
                    payload:userDetails
                })
            })
    }
}