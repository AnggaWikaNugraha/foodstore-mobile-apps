import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Layout from "../layout";
import { colors } from "../../utils/colors";

const Beranda = () => {
  return (
    <Layout title="Beranda">
      <View style={styles.wrapper}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
         
          <View style={styles.card}>
            <Text style={styles.versionText(13, colors.text.black)}>Name : Semangka</Text>
            <Text style={styles.versionText(11, colors.text.black)}>Price Rp 20.000</Text>
            <Text style={styles.versionText(11, colors.text.black)}>Tags: sayuran,segar</Text>
            <Text style={styles.versionText(11, colors.text.black)}>Desciption : Good</Text>
          </View>
          
        </View>
      </View>
    </Layout>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    paddingTop: 10,
  },
  card: {
    width: Dimensions.get("window").width / 2.3,
    borderWidth: .5,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.bg.lightBlue,
  },
  versionText: (size, color, weight) => ({
    fontSize: size,
    color: color ? color : colors.text.blue,
  }),
});
