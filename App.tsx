import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigator } from './src/navigator/Navigator';
import { PermissionsProvider } from './src/context/PermissionsContext';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
}