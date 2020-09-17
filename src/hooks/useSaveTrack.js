import { useContext } from 'react'
import { Context as LocationContext } from '../context/LocationContext'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as AuthContext } from '../context/AuthContext'
import { navigate } from '../navigationRef';

export default () => {
    const { state: { userId } } = useContext(AuthContext);
    const { createTrack } = useContext(TrackContext);
    const {
        state: { name, locations },
        reset
    } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(userId, name, locations);
        reset();
        navigate('TrackList');
    };

    return [saveTrack];
};