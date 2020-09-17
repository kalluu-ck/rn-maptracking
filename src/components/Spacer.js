import React from 'react'
import { StyleSheet, View } from 'react-native'

const Spacer = ({ children }) => {
    return (
        <View style={styles.spacerStyle}>{children}</View>
    );
}

const styles = StyleSheet.create({
    spacerStyle: {
        margin: 15
    }
});

export default Spacer;