import React from 'react'
import { StyleSheet, Text } from 'react-native'
import MapView from 'react-native-maps'

const Map = () => {
    return (
        <MapView
            style={styles.mapStyle}
            initialRegion={{
                latitude: 10.772,
                longitude: 106.647,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        />
    );
};

const styles = StyleSheet.create({
    mapStyle: {
        height: 300
    }
});

export default Map;