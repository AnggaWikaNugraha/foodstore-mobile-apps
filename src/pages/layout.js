import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { colors } from "../utils/colors";

const Layout = ({
  children,
  justifyContent,
  alignItems,
  type,
  title,
  onPress,
}) => {
  return (
    <>
      <Header 
        type={type} 
        title={title} 
        onPress={onPress} 
      />
      <View style={styles.container(justifyContent, alignItems)}>
        
        {children}
      
      </View>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: (justifyContent, alignItems) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  }),
});
