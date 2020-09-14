import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text>TrackListScreen Screen!</Text>
            <Button title='Go to Track Detail' onPress={() => navigation.navigate('TrackDetail')}></Button>
        </>
    );
}

const styles = StyleSheet.create({});

export default TrackListScreen;