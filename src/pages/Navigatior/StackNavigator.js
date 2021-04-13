import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../Home';
import DetailScreen from '../Home/Detail';

import DeviceScreen from '../Device';
import DoctorScreen from '../Doctor';

import SettingsScreen from '../Settings';
import ProfileScreen from '../Settings/Profile';

const Stack = createStackNavigator();
const TabStack = createBottomTabNavigator();

class StackNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={this.tabStacks}
            options={({route}) => {
              return {
                headerTitle: this.getHeaderTitle(route),
              };
            }}
          />
          <Stack.Screen name="Details" component={DetailScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  tabStacks = () => {
    return (
      <TabStack.Navigator>
        <TabStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="home-edit-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <TabStack.Screen
          name="Device"
          component={DeviceScreen}
          options={{
            tabBarLabel: 'Device',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="devices"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <TabStack.Screen
          name="Doctor"
          component={DoctorScreen}
          options={{
            tabBarLabel: 'Doctor',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="doctor" color={color} size={size} />
            ),
          }}
        />
        <TabStack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-cog-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </TabStack.Navigator>
    );
  };

  getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
    console.log('routeName~~~~:', routeName);
    switch (routeName) {
      case 'Home':
        return 'Home';
      case 'Device':
        return 'Device';
      case 'Doctor':
        return 'Doctor';
      case 'Settings':
        return 'Settings';
      default:
        return 'Default';
    }
  }
}

export default StackNavigator;
