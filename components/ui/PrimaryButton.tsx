import { color } from '@/theme/color';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string,
  onPress: () => void
}

const PrimaryButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <View>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowOffset : { width: 1, height: 13},
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default PrimaryButton;
