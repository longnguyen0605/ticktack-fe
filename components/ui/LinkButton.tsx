import { color } from '@/theme/color';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string,
  onPress: () => void
}

const LinkButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 20
  },
  buttonText: {
    color: color.primary,
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }
})

export default LinkButton;
