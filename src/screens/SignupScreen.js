import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../components/Spacer'
import { ScrollView } from 'react-native-gesture-handler'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, signup } = useContext(AuthContext);

    return (
        <ScrollView justifyContent="center" style={styles.containerStyle}>
            <Text h3>Sign Up for Tracker</Text>
            <Spacer />
            <Input
                label='Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <Input
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry
            />
            {state && state.error ? <Text style={styles.errorStyle}>An error has occured: {state.error}</Text> : null}
            <Spacer>
                <Button title='Sign Up' onPress={() => { signup(email, password) }} />
            </Spacer>
        </ScrollView>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        header: () => false
    };
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        marginBottom: 150
    },
    errorStyle: {
        color: 'red',
        margin: 15
    }
});

export default SignupScreen;