import { useState, useEffect } from 'react'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

export default (callback) => {
    const [error, setError] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission is not granted');
            }

            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            },
                callback
            );
        }
        catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return [error];
}