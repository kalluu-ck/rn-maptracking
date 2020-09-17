import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'

const TrackDetailScreen = ({ navigation }) => {
    const { state: tracks } = useContext(TrackContext);
    const trackId = navigation.getParam('id');
    const track = tracks.find(r => r.id === trackId);
    const initLocation = track.locations[0];

    return (
        <View>
            <Text style={{ fontSize: 48 }}>{track.name}</Text>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    ...initLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}>
                <Polyline coordinates={track.locations.map(r => r.coords)} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    mapStyle: {
        height: 300
    }
});

export default TrackDetailScreen;