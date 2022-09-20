import React from 'react';
import { TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function AppButton({ onPress, icon, title, textColor, color, borderColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={{
      elevation: 8,
      backgroundColor: color,
      borderColor: borderColor,
      borderWidth: 1,
      borderRadius: 3,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 200,
      marginTop: 10,
    }}>
      <Text style={{
        fontSize: 18,
        color: textColor,
        alignSelf: "center",
      }}>{title}</Text>
    </TouchableOpacity>
  )
}

