import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

class LoginScreen extends React.Component {
  mainRoot = {
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Devices',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Doctors',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Settings',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  };

  render() {
    return (
      <View style={styles.root}>
        <Button
          title="Login"
          color="#710ce3"
          // onPress={() => Navigation.setRoot(this.mainRoot)}
        />
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

export default LoginScreen;
