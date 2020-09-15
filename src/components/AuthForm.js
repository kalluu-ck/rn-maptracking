import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AuthForm = ({ title, submitButtonTitle, submitButtonOnPress, error }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Text h3>{title}</Text>
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
            {error ? <Text style={styles.errorStyle}>An error has occured: {error}</Text> : null}
            <Spacer>
                <Button title={submitButtonTitle} onPress={() => submitButtonOnPress(email, password)} />
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red',
        margin: 15
    },
});

export default AuthForm;