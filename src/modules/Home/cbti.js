import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CBTIScreen extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>CBTI Screen</Text>
      </View>
    );
  }
}

CBTIScreen.options = {
  topBar: {
    title: {
      text: 'cbti',
    },
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

export default CBTIScreen;
