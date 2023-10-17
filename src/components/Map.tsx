import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { MapMarkerProps, Marker } from 'react-native-maps';

type Props = {
  markers?: MapMarkerProps[]
}

export const Map = ({markers}:Props) => {
  return (
    <>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
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
    </>
  );
}

const styles = StyleSheet.create({

});