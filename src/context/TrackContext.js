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
    return async (name, locations) => {
        console.log(name, locations.length);
        const { currentUser } = await firebase.auth();
        await firebase.database().ref(`/users/${currentUser.uid}/tracks`).push({
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