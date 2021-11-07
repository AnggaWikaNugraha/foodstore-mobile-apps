import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Layout from "../layout";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../utils/storage";
import { actionGetItems } from "../../redux/action/user/products";
import { useFocusEffect } from "@react-navigation/core";

const Beranda = () => {

  const dispatch = useDispatch()
  const StateProducts = useSelector(state => state.StateProducts)

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = getData('stateLogin').then(res => {
        dispatch(actionGetItems(res.token))
      })

      return () => unsubscribe();
    }, [dispatch])
  );

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
         {
          StateProducts.response.products && StateProducts.response.products.map((res,key) => {return(
          <View key={key} style={styles.card}>
            <Text style={styles.versionText(13, colors.text.black)}>Name : {res?.name}</Text>
            <Text style={styles.versionText(11, colors.text.black)}>Price Rp {res?.price}</Text>
            <Text style={styles.versionText(11, colors.text.black)}>Tags: {res?.tags.map((res) => console.log('tags' + res))}</Text>
            <Text style={styles.versionText(11, colors.text.black)}>Desciption : {res?.description}</Text>
          </View>
          )})
         }
          
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
