import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext);

    return (
        <>
            <Text>AccountScreen Screen!</Text>
            <Spacer>
                <Button title='Sign Out' onPress={signout} />
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({});

export default AccountScreen;