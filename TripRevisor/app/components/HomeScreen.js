import React from 'react';
import { StyleSheet, View } from 'react-native';
import CityList from './CityList';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <CityList navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
