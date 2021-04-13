import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class DoctorScreen extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Doctors Screen</Text>
      </View>
    );
  }
}

DoctorScreen.options = {
  topBar: {
    title: {
      text: 'Doctors',
    },
  },
  bottomTab: {
    text: 'Doctors',
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default DoctorScreen;
