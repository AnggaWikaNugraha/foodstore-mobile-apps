import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/colors";
import Gap from "../utils/Gap";

const Header = ({ type, title, onPress }) => {
  switch (type) {
    case "home":
      return (
        <View style={styles.container(true)}>
          <TouchableOpacity onPress={onPress}>
            <Icon
              name="arrow-back-outline"
              color={colors.icon.blue}
              size={24}
            />
          </TouchableOpacity>
          <Gap width={32} />
          <Text style={styles.text(14)}>{title}</Text>
        </View>
      );

    default:
      return (
        <View style={styles.container()}>
          <Text style={styles.text(16)}>{title}</Text>
        </View>
      );
  }
};

export default Header;

const styles = StyleSheet.create({
  container: (justifyContent) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justifyContent ? justifyContent : 'center',
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderColor: colors.border.pink,
    backgroundColor: colors.background,
  }),
  text: (size, color) => ({
    fontSize: size ? size : 14,
    color: color ? color : colors.text.blue,
  }),
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 22,
    paddingBottom: 10,
  },
});
