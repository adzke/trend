import * as React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { MyComponent } from './Card';
import {App} from './Scroll'
export default function Main() {
  return (
    <PaperProvider>
     {/* <MyComponent/> */}
     <App/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);