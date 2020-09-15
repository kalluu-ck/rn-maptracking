import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.containerStyle}>
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
            <Spacer>
                <Button title='Sign Up' />
            </Spacer>
        </View>
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
        justifyContent: "center",
        marginBottom: 100
    }
});

export default SignupScreen;