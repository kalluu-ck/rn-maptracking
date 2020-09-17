import '../_mockLocation'

import React, { useContext, useCallback } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback(
        (location) => {
            addLocation(location, recording);
        },
        [recording]);
    const [error] = useLocation(isFocused || recording, callback);

    return (
        <ScrollView>
            <SafeAreaView forceInset={{ top: 'always' }}>
                <Text h3>Create a Track</Text>
                <Map />
                <TrackForm />
                {error ? <Text>Please enable location services</Text> : null}
            </SafeAreaView>
        </ScrollView>
    );
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} color="black" />
};

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);