import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import firebase from 'firebase'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return { ...state, token: null, error: action.payload.error }
        case 'SET_LOGIN':
            return { ...state, token: action.payload.token, error: '' }
        case 'CLEAR_ERROR':
            return { ...state, error: '' }
        default:
            return state;
    }
};

const signup = (dispatch) => (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((respCreate) => {
            handleSignIn(dispatch, email, password);
        })
        .catch(e => {
            dispatch({ type: 'ADD_ERROR', payload: { error: e.message } })
        })
};

const signin = (dispatch) => {
    return (email, password) => {
        handleSignIn(dispatch, email, password);
    };
};

const signout = (dispatch) => {
    return () => {

    };
};

const clearError = (dispatch) => {
    return () => dispatch({ type: 'CLEAR_ERROR' });
};

const handleSignIn = (dispatch, email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (respSignIn) => {
            const tokenResult = await respSignIn.user.getIdTokenResult();
            const token = tokenResult.token;
            await AsyncStorage.setItem('mapTrackingUserToken', token);
            dispatch({ type: 'SET_LOGIN', payload: { token: token } });
            navigate('TrackList');
        })
        .catch(e => {
            dispatch({ type: 'ADD_ERROR', payload: { error: e.message } })
        })
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, signin, signout, clearError },
    {
        token: null,
        error: null,
    }
);