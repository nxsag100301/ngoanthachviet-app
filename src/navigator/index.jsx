import React, { createRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailProduct, Introduce, Products, Welcome } from '../screens';
import BottomTab from './BottomTab';

export const navigationRef = createRef();

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'welcome'}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="bottomTab" component={BottomTab} />
        <Stack.Screen name="introduce" component={Introduce} />
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen name="detailProduct" component={DetailProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
