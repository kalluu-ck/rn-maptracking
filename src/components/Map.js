import React, { } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {
    let points = [];
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 10.772 + i * 0.001,
                longitude: 106.647 + i * 0.001,
            });
        } else {
            points.push({
                latitude: 10.772 + i * 0.002,
                longitude: 106.647 + i * 0.001,
            });
        }
    }

    return (
        <MapView
            style={styles.mapStyle}
            initialRegion={{
                latitude: 10.772,
                longitude: 106.647,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}>
            <Polyline coordinates={points} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    mapStyle: {
        height: 300
    }
});

export default Map;