import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DoctorScreen from '../Doctor';
import {Colors} from '../../utils';

const Stack = createStackNavigator();

class DoctorStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Doctor"
        screenOptions={{
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen name="Doctor" component={DoctorScreen} />
      </Stack.Navigator>
    );
  }
}

export default DoctorStackNavigator;
