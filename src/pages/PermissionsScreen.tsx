import React, {useContext} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';
import { PermissionsContext } from '../context/PermissionsContext';
import { BlackButton } from '../components/BlackButton';

export const PermissionsScreen = () => {

  const {permissions, askLocationPermissions, checkLocationPermission} = useContext(PermissionsContext)

  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Es necesario el uso del GPS para usar esta aplicación</Text>

      <BlackButton 
        title='Permiso'
        onPress={askLocationPermissions}
      />

      <Text style={{ marginTop: 20 }}>
        {JSON.stringify(permissions, null, 5)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize: 18,
    textAlign:'center',
    width: 250,
    marginBottom: 20,
    color: 'black'
  }
});