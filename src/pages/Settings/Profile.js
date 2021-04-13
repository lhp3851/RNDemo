import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Settings Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default ProfileScreen;
