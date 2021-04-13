import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DeviceScreen from '../Device';

const Stack = createStackNavigator();

class DeviceStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Device">
        <Stack.Screen name="Device" component={DeviceScreen} />
      </Stack.Navigator>
    );
  }
}

export default DeviceStackNavigator;
