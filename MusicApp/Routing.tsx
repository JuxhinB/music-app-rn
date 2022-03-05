import React from 'react';
import {useTranslation} from 'react-i18next';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//
import screens from './screens';
import {MainNavigatorParams, Routes} from './Types';

const Stack = createNativeStackNavigator<MainNavigatorParams>();
const Tab = createBottomTabNavigator<MainNavigatorParams>();

export default function Routing() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t(`navigation.${Routes.Home}`) as Routes.Home}
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={t(`navigation.${Routes.Search}`) as Routes.Search}
        component={SearchStackNavigator}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name={t(`navigation.${Routes.Categories}`) as Routes.Categories}
        component={CategoriesStackNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={`${Routes.Home}-nested` as Routes.Home}
        component={screens.Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.CategoryExtended}
        component={screens.CategoryExtended}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.DetailsScreen}
        component={screens.DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Tab.Screen
        name={`${Routes.Search}-nested` as Routes.Search}
        component={screens.Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.DetailsScreen}
        component={screens.DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function CategoriesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={`${Routes.Categories}-nested` as Routes.Categories}
        component={screens.Categories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.CategoryExtended}
        component={screens.CategoryExtended}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.DetailsScreen}
        component={screens.DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
