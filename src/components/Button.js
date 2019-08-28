import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
  });

const Button = (props) => {
    return (
    <TouchableOpacity>
        <View style={[styles.button, props.extraStyle]}>
           <Text>{props.buttonText}</Text>
        </View>
    </TouchableOpacity>
    );
}

export default Button;