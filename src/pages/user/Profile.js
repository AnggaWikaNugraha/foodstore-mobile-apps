import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import { colors } from '../../utils/colors'
import { getData } from '../../utils/storage'
import Layout from '../layout'

const Profile = () => {
  const [profile, setprofile] = useState({
    nama : '',
    email : '',
    hoby : [],
    roles : ''
  })

  useEffect(() => {
    getData('stateLogin').then(res => {
      setprofile({
        ...profile,
        nama : res.user.full_name,
        email : res.user.email,
        hoby : res.user.hoby,
        roles : res.user.role
      })
    })
  }, [])

  return (
    <Layout title='Profile'>
      <View style={styles.card}>
        <Text>Nama: {profile?.nama}</Text>
        <Text>Email: {profile?.email}</Text>
        <Text>Hoby: {profile?.hoby.map((res) => res + ", ")}</Text>
        <Text>Role: {profile?.roles}</Text>
      </View>
    </Layout>
  )
}

export default Profile

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width / 1.2,
    borderWidth: .5,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.bg.lightBlue,
  },
})
