import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';


export const useLocation = () => {

  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>();


  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        
        setInitialPosition({
          latitud: coords.latitude,
          longitud: coords.longitude
        })
        setHasLocation(true)

      },
      (err) => console.log({ err }),
      {
        enableHighAccuracy: true
      }
    );
  }, [])


  return {
    hasLocation,
    initialPosition,
  }
}

const styles = StyleSheet.create({

});