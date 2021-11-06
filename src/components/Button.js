import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/colors";

const Button = ({
  paddingHorizontal,
  paddingVertical,
  backgroundColor,
  borderRadius,
  title,
  type,
  onPress,
  sizeText,
  colorText,
  weightText
}) => {
  switch (type) {
    default:
      return (
        <TouchableOpacity
          style={styles.paddingButton(
            borderRadius,
            backgroundColor,
            paddingVertical,
            paddingHorizontal
          )}
          onPress={onPress}
        >
          <Text style={styles.versionText(
            sizeText,
            colorText,
            weightText
          )}>{title}</Text>
        </TouchableOpacity>
      );
  }
};

export default Button;

const styles = StyleSheet.create({
  paddingButton: (
    borderRadius,
    backgroundColor,
    paddingVertical,
    paddingHorizontal
  ) => ({
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : 20,
    paddingVertical: paddingVertical ? paddingVertical : 0,
    backgroundColor: backgroundColor ? backgroundColor : colors.button.disable,
    borderRadius: borderRadius ? borderRadius : 0,
  }),
  versionText: (size, color, weight) =>  ({
    fontSize: size ? size : 14,
    color : color ? color : colors.text.white
  }),
});
