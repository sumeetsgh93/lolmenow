/**
 * Created by madki on 29/06/17.
 */
import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const FeedScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Feed</Text>
    <Text
      style={styles.instructions}
      onPress={() => Actions.comments()} // New Code
    >
      Go to comments
    </Text>
  </View>
);

export default FeedScreen;
