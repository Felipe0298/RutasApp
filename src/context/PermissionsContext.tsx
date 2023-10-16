import React, { createContext, useState, useEffect } from "react";
import { PermissionStatus, check, request, PERMISSIONS } from 'react-native-permissions';
import { Platform, AppState } from 'react-native';


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

  const [permissions, setPermissions] = useState(permissionsInitState);

  useEffect(() => {
    
    AppState.addEventListener('change', state => {
      
      if (state !== 'active') return;

      checkLocationPermission();

    })

    return () =>{
      AppState.addEventListener
    }
   
  }, [])
  

  const askLocationPermissions = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus
    });
  }

  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    setPermissions({
      ...permissions,
      locationStatus: permissionStatus
    });
  }


  return (
    <PermissionsContext.Provider value={{
      permissions, askLocationPermissions, checkLocationPermission
    }}>
      {children}
    </PermissionsContext.Provider>
  )
}

