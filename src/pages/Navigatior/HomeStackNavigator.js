import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Home';
import DetailScreen from '../Home/Detail';

const Stack = createStackNavigator();

class HomeStackNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '首页',
          }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}

export default HomeStackNavigator;
