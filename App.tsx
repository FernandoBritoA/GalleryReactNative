import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './src/types/navigation/RootStackParamList';
import ImageGallery from './src/screens/ImageGallery';
import ImageDetail from './src/screens/ImageDetail';
import routes from './src/utilities/routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={routes.ImageGallery} component={ImageGallery} />
      <Stack.Screen name={routes.ImageDetail} component={ImageDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
