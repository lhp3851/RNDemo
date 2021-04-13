import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStackNavigator from './HomeStackNavigator';
import DeviceStackNavigator from './DeviceStackNavigator';
import DoctorStackNavigator from './DoctorStackNavigator';
import SettingsStatckNavigator from './SettingsStackNavigator';

const TabStack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabStack.Navigator
        initialRouteName="Doctor"
        screenOptions={{
          headerStyle: {backgroundColor: '#6595F4'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <TabStack.Screen
          name="Home"
          component={HomeStackNavigator}
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
          component={DeviceStackNavigator}
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
          component={DoctorStackNavigator}
          options={{
            tabBarLabel: 'Doctor',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="doctor" color={color} size={size} />
            ),
          }}
        />
        <TabStack.Screen
          name="Settings"
          component={SettingsStatckNavigator}
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
    </NavigationContainer>
  );
}
