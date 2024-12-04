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
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: color.primary,
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }
})

export default LinkButton;
