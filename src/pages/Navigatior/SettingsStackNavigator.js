import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsScreen from '../Settings';
import {Colors} from '../../utils';

const Stack = createStackNavigator();

class SettingsStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: '设置',
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default SettingsStackNavigator;
