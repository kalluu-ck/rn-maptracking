import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <Text>AccountScreen Screen!</Text>
            <Spacer>
                <Button title='Sign Out' onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
}

AccountScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name="gear" size={20} color="black" />
}

const styles = StyleSheet.create({});

export default AccountScreen;