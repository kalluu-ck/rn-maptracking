import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import firebase from 'firebase'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return { ...state, token: null, error: action.payload.error }
        case 'SETLOGIN':
            return { ...state, token: action.payload.token, error: '' }
        default:
            return state;
    }
}

const signup = (dispatch) => (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((respCreate) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(async (respSignIn) => {
                    const tokenResult = await respSignIn.user.getIdTokenResult();
                    const token = tokenResult.token;
                    await AsyncStorage.setItem('mapTrackingUserToken', token);
                    dispatch({ type: 'SETLOGIN', payload: { token: token } });
                    navigate('TrackList');
                })
                .catch(e => {
                    dispatch({ type: 'ADD_ERROR', payload: { error: e.message } })
                })
        })
        .catch(e => {
            dispatch({ type: 'ADD_ERROR', payload: { error: e.message } })
        })
}

const signin = (dispatch) => {
    return (email, password) => {

    }
}

const signout = (dispatch) => {
    return () => {

    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, signin, signout },
    {
        token: null,
        error: null,
    }
);