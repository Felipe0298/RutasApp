import React, { createContext, useState } from "react";
import { PermissionStatus, check } from 'react-native-permissions';
import { PermissionsScreen } from '../pages/PermissionsScreen';


export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
  locationStatus: 'unavailable'
}

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermissions: () => void;
  checkLocationPermission: () => void
}

export const PermissionsContext = createContext({} as PermissionsContextProps);


export const PermissionsProvider = ({ children }: any) => {

  const askLocationPermissions = () => {

  }

  const checkLocationPermission = () => {

  }

  const [permissions, setPermissions] = useState(permissionsInitState)

  return (
    <PermissionsContext.Provider value={{
      permissions, askLocationPermissions, checkLocationPermission
    }}>
      {children}
    </PermissionsContext.Provider>
  )
}