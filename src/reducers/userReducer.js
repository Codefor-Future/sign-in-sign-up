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
}

const userReducer = (state = initState, action) => {
    if (action.type === 'LOGIN_SUCCESS') {
        return {
            ...state,
            userDetails: action.payload,
            isLoggedIn: true,
        }
    } else if(action.type === 'LOGIN_FAILED'){
        return {
            ...state,
            userDetails: action.payload,
            errorInLogginIn: true,
        }
    }else if(action.type === 'SIGNUP_SUCCESS'){
        return {
            ...state,
            userDetails: action.payload,
            isSignedUp: true,
        }
    }else if(action.type === 'SIGNUP_FAILED'){
        return {
            ...state,
            userDetails: action.payload,
            errorInSignUp: true,
        }
    }else {
        return state
    }


}
export default userReducer;