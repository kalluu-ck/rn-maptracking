import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.containerStyle}>
            <Text h3>Sign Up for Tracker</Text>
            <Spacer />
            <Input label='Email' />
            <Input label='Password' />
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