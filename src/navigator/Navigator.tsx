import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsScreen } from '../pages/PermissionsScreen';
import { MapScreen } from '../pages/MapScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor:'white'
        }
      }}
    >
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
    </Stack.Navigator>
  );
}