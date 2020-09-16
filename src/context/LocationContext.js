import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CURRENT_LOC':
            return { ...state, currentLocation: action.payload }
        case 'START_REC':
            return { ...state, recording: true }
        case 'STOP_REC':
            return { ...state, recording: false }
        case 'ADD_LOC':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'CHANGE_NAME':
            return { ...state, name: action.payload }
        default:
            return state;
    }
};

const changeName = (dispatch) => {
    return (name) => {
        dispatch({ type: 'CHANGE_NAME', payload: name })
    }
}

const startRecording = (dispatch) => {
    return () => {
        dispatch({ type: 'START_REC' });
    }
}

const stopRecording = (dispatch) => {
    return () => {
        dispatch({ type: 'STOP_REC' });
    }
}

const addLocation = (dispatch) => {
    return (location, recording) => {
        dispatch({ type: 'ADD_CURRENT_LOC', payload: location });

        if (recording) {
            dispatch({ type: 'ADD_LOC', payload: location });
        }
    }
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName },
    {
        name: '',
        recording: false,
        locations: [],
        currentLocation: null,
    }
);