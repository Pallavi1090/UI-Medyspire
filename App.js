//App

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { usePreventScreenCapture } from 'expo-screen-capture';
import loginScreen from "./screens/test";
import signupScreen from "./screens/signup";

import myCardScreen from "./screens/card";
import networkCentersScreen from "./screens/network";
import renewalScreen from "./screens/renew";
import hardcopyRequestScreen from "./screens/hardCopyRequest";
import settingsScreen from "./screens/settings";
import clusterScreen from "./screens/clusterdashboard";
import formScreen from "./screens/form";
import earningsScreen from './screens/earnings';
import forgotScreen from './screens/forgotPassword';
import medylifelineScreen from './screens/medylifeline';
import aboutScreen from './screens/about';


export default function App() {
  const Stack = createStackNavigator();
  usePreventScreenCapture();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="login" component={loginScreen} />
        <Stack.Screen name="signup" component={signupScreen} />
        <Stack.Screen name="dashboard" component={medylifelineScreen}/>
        <Stack.Screen name="about" component={carouselScreen}/>
        <Stack.Screen name="myCard" component={myCardScreen} />
        <Stack.Screen name="networkCenters" component={networkCentersScreen} />
        <Stack.Screen name="renewal" component={renewalScreen} />
        <Stack.Screen
          name="hardcopyRequest"
          component={hardcopyRequestScreen}
        />
        <Stack.Screen name="form" component={formScreen} />
        <Stack.Screen name="settings" component={settingsScreen} />
        <Stack.Screen name="cluster" component={clusterScreen} />
        <Stack.Screen name="earnings" component={earningsScreen} />
        <Stack.Screen name="forgotPassword" component={forgotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
