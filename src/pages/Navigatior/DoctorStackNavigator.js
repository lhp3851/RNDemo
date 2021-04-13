import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DoctorScreen from '../Doctor';

const Stack = createStackNavigator();

class DoctorStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Doctor">
        <Stack.Screen name="Doctor" component={DoctorScreen} />
      </Stack.Navigator>
    );
  }
}

export default DoctorStackNavigator;
