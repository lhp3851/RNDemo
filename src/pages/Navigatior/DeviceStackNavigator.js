import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DeviceScreen from '../Device';
import {Colors} from '../../utils';

const Stack = createStackNavigator();

class DeviceStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Device"
        screenOptions={{
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen name="Device" component={DeviceScreen} />
      </Stack.Navigator>
    );
  }
}

export default DeviceStackNavigator;
