import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class DevicesScreen extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Devices Screen</Text>
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

export default DevicesScreen;
