import React, { useContext } from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {
    const { state: { userId } } = useContext(AuthContext);
    const { state: tracks, fetchTracks } = useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={() => { fetchTracks(userId) }}></NavigationEvents>
            <FlatList
                data={tracks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { id: item.id })}>
                        <ListItem chevron title={item.name} />
                    </TouchableOpacity>
                }}
            />
        </>
    );
};

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({});

export default TrackListScreen;