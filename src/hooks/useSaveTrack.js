import { useContext } from 'react'
import { Context as LocationContext } from '../context/LocationContext'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as AuthContext } from '../context/AuthContext'

export default () => {
    const { state: { userId } } = useContext(AuthContext);
    const { createTrack } = useContext(TrackContext);
    const {
        state: { name, locations }
    } = useContext(LocationContext);

    const saveTrack = () => {
        createTrack(userId, name, locations);
    };

    return [saveTrack];
};