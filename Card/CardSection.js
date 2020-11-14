import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = (props) => {
    return (
        // props childrean adalah isi file dari card album detail.js
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        padding: 5,
        borderColor: '#ddd',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#fff',
        position: 'relative'
    }
})

export default CardSection