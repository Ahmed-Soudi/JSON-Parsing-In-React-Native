import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
        return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}> {children} </Text>
        </TouchableOpacity>
    );
};
const styles = {
    buttonStyle: {
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 2,
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5
    },
    textStyle: {
        alignSelf: 'center',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#007aff'
    }
};
export default Button;
