import { useState, useEffect } from 'react'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

export default (shouldTrack, callback) => {
    const [error, setError] = useState(null);

    useEffect(() => {

        let subscriber;
        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync();
                if (!granted) {
                    throw new Error('Location permission is not granted');
                }

                subscriber = await watchPositionAsync(
                    {
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

        if (shouldTrack) {
            startWatching();
        }
        else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }

    }, [shouldTrack, callback]);

    return [error];
}