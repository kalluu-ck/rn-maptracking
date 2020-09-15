import React, { useContext } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
    const { state, signup } = useContext(AuthContext);

    return (
        <ScrollView justifyContent="center" style={styles.containerStyle}>
            <AuthForm
                title='Sign Up for Tracker'
                submitButtonTitle='Sign Up'
                submitButtonOnPress={signup}
                error={state.error}
            />
            <NavLink
                text='Already have an account? Sign in instead'
                routeName='Signin'
            />
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
        marginBottom: 100
    }
});

export default SignupScreen;