import {applyMiddleware, createStore} from 'redux' 
import thunkMiddleware from 'redux-thunk'
import {auth} from '../firebase'
import {database} from '../firebase'


const REGISTER = 'REGISTER'
const SET_TIME_DESKTOP = 'SET_TIME_DESKTOP'
const SET_TIME_MOBILE = 'SET_TIME_MOBILE'
const SET_LOADING = 'SET_LOADING'

const initialState = {
    currentUser: '',
    time_desktop: null,
    time_mobile: null,
    isLoading: true
}

const Reducer = (state=initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                currentUser: action.currentUser
        }
        case SET_TIME_DESKTOP:
            return {
                ...state,
                time_desktop: action.time
        }
        case SET_TIME_MOBILE:
            return {
                ...state,
                time_mobile: action.time
        }
        case SET_LOADING:
            return {
                ...state,
               isLoading: action.payload
        }
        default: return state
    }
}

const setRegister = (currentUser) => ({type: REGISTER, currentUser})

const setTimeDesktop = (time) => ({type: SET_TIME_DESKTOP, time})
const setTimeMobile = (time) => ({type: SET_TIME_MOBILE, time})

const setLoading = (payload) => ({type: SET_LOADING, payload})



// ----------------Auth--------------------

export const getRegister = (email, password) => {
    return dispatch => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
            console.log(response)
            alert('Congrats! You have been signed up!')
        })
        .catch(error => alert(error))
    }
}


export const getLogin = (email, password) => {
    return dispatch => {
        auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            console.log(response)
            // alert('Congrats! You have logged in!')
        })
        .catch(error => alert(error))
    }
}


export const getUpdate = () => {
    return dispatch => {
        auth.onAuthStateChanged(user => {
           console.log(user)
           dispatch(setRegister(user))
        })
   
    }
}


export const getSignOut = () => {
    return dispatch => {
        auth.signOut()
        .then(response => {
            console.log(response)
        })
        .catch(error => alert(error))
   
    }
}


// ----------------DB--------------------

export const writeDB = (where, seconds) => {
    return dispatch => {
        database.ref('timer/' + where).set({
            seconds
        })
    }
}

export const readDB = (where) => {
   
    return dispatch => {
        dispatch(setLoading(true))
        console.log(where)
        database.ref('timer/' + where)
            .on('value', (snapshot) =>{
                console.log(snapshot.val());
                dispatch(setTimeDesktop(snapshot.val().seconds))
                dispatch(setLoading(false))
        })
    }
}

const store = createStore(Reducer, [], applyMiddleware(thunkMiddleware))

export default store