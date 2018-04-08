import React from 'react';
import { Text, View } from 'react-native';

export default class Header extends React.Component {

    render() {
      const { textStyle, viewStyle } = styles;

      return (
        <View style={viewStyle}>
          <Text style={textStyle}> {this.props.HeaderText} </Text>
        </View>
      );
    }
}
const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    height: 60,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    elevation: 5
  }
};
