import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//
import screens from './screens';
import {MainNavigatorParams, Routes} from './Types';

const Stack = createNativeStackNavigator<MainNavigatorParams>();

export default function Routing() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={screens.Home} />
      <Stack.Screen name={Routes.Categories} component={screens.Categories} />
      <Stack.Screen
        name={Routes.CategoryExtended}
        component={screens.CategoryExtended}
      />
      <Stack.Screen
        name={Routes.DetailsScreen}
        component={screens.DetailsScreen}
      />
      <Stack.Screen name={Routes.Search} component={screens.Search} />
    </Stack.Navigator>
  );
}
