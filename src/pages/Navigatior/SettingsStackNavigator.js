import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from '../Settings';

const Stack = createStackNavigator();

class SettingsStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    );
  }
}

export default SettingsStackNavigator;
