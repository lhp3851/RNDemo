/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/pages/Navigatior/TabNavigator';
import StackNavigator from './src/pages/Navigatior/StackNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StackNavigator);
