import createDataContext from './createDataContext'
import firebase from 'firebase'

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => {
    return () => {

    }
};

const createTrack = (dispatch) => {
    return async (userId, name, locations) => {
        await firebase.database().ref(`/users/${userId}/tracks`).push({
            name: name,
            locations: locations
        });
    }
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);