import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import BottomNavigation from './bottomnavigation';
import NewChat from '../screen/newchat/index';
import Message from '../screen/message';
import Splash from '../screen/splash';

type RootStackParamList = {
  Splash: undefined;
  BottomNavigation: undefined;
  NewChat: undefined;
  Message: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewChat"
          component={NewChat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
