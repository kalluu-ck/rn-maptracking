import React, { useContext } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
    const { state, signin, clearError } = useContext(AuthContext);

    return (
        <ScrollView justifyContent="center" style={styles.containerStyle}>
            <NavigationEvents onWillFocus={clearError} />
            <AuthForm
                title='Sign In to Your Account'
                submitButtonTitle='Sign In'
                submitButtonOnPress={signin}
                error={state.error}
            />
            <NavLink
                text="Don't have an account? Sign up instead"
                routeName='Signup'
            />
        </ScrollView>
    );
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;