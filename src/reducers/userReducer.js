const initState = {
    userDetails: {
        first_name: 'test',
        last_name: '',
        email: '',
        password: ''
    },
    isLoggedIn: false,
    errorInLogginIn: false,
    isSignedUp: false,
    errorInSignUp: false,
    msg:''
}

const userReducer = (state = initState, action) => {
    if (action.type === 'LOGIN_SUCCESS') {
        return {
            ...state,
            userDetails: action.payload,
            errorInLogginIn: false,
            isLoggedIn: true,
        }
    } else if(action.type === 'LOGIN_FAILED'){
        return {
            ...state,
            userDetails: action.payload.userDetails,
            msg: action.payload.msg,
            errorInLogginIn: true,
            isLoggedIn: false,
        }
    }else if(action.type === 'SIGNUP_SUCCESS'){
        return {
            ...state,
            userDetails: action.payload.userDetails,
            msg: action.payload.msg,
            isSignedUp: true,
        }
    }else if(action.type === 'SIGNUP_FAILED'){
        return {
            ...state,
            userDetails: action.payload.userDetails,
            msg: action.payload.msg,
            errorInSignUp: true,
        }
    }else {
        return state
    }


}
export default userReducer;