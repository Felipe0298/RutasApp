import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { MapMarkerProps, Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';


type Props = {
  markers?: MapMarkerProps[]
}

export const Map = ({markers}:Props) => {

  
  const {hasLocation, initialPosition} = useLocation();

  if (!hasLocation){
    return <LoadingScreen/>
  }

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition!.latitud,
          longitude: initialPosition!.longitud,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <Marker
        image={ require('../assets/custom-marker.png')}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="esto es un titulo"
          description="esto es una descr"
        /> */}
      </MapView>

      <Fab
        iconName='star-outline'
        onPress={() => console.log('first')}
        style={{
          position:'absolute',
          bottom: 20,
          right: 20
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({

});