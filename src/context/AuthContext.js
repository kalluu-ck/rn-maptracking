import createDataContext from './createDataContext'
import firebase from 'firebase'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return { ...state, error: action.payload.error }
        case 'SET_LOGIN':
            return { ...state, userId: action.payload.userId }
        case 'CLEAR_ERROR':
            return { ...state, error: '' }
        default:
            return state;
    }
};

const signup = (dispatch) => (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((resp) => {
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
        firebase.auth().signOut().then(() => {
            navigate('loginFlow');
        });
    };
};

const clearError = (dispatch) => {
    return () => dispatch({ type: 'CLEAR_ERROR' });
};

const handleSignIn = (dispatch, email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(e => {
            dispatch({ type: 'ADD_ERROR', payload: { error: e.message } })
        })
};

const watchUserAuth = (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch({ type: 'SET_LOGIN', payload: { userId: user.uid } });
            navigate('TrackList');
        }
        else {
            dispatch({ type: 'SET_LOGIN', payload: { userId: null } });
            navigate('loginFlow');
        }
    });
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, signin, signout, clearError },
    {
        userId: null,
        error: null,
    },
    watchUserAuth
);