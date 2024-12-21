import { StyleSheet } from "react-native";
import { color } from "./color";

export const textStyle = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: color.primary
  },
  normalTitle:{
    fontSize: 30  ,
    fontWeight: 'bold',
    color: color.primary
  },
  subText: {
    fontSize: 16,
    color: color.subText
  },
  
})