import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CURRENT_LOC':
            return { ...state, currentLocation: action.payload }
        default:
            return state;
    }
};

const startRecording = (dispatch) => {
    return () => {

    }
}

const stopRecording = (dispatch) => {
    return () => {

    }
}

const addLocation = (dispatch) => {
    return (location) => {
        dispatch({ type: 'ADD_CURRENT_LOC', payload: location });
    }
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    {
        recording: false,
        locations: [],
        currentLocation: null,
    }
);