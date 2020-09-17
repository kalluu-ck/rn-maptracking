import createDataContext from './createDataContext'
import firebase from 'firebase'

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_TRACKS':
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => {
    return (userId) => {
        firebase.database().ref(`/users/${userId}/tracks`)
            .on('value', snapshot => {
                const data = snapshot.val();
                const tracks = Object.keys(data).map((key) => {
                    return { ...data[key], id: key };
                });
                dispatch({ type: 'FETCH_TRACKS', payload: tracks })
            });
    };
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