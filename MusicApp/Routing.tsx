import React from 'react';
import {useTranslation} from 'react-i18next';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
//
import screens from './screens';
import {MainNavigatorParams, Routes} from './Types';
import {useAppSelector} from './store/hooks';
import {selectActiveRouteName} from './store/slices/appStateSlice';
//
import theme from './styles/theme';

const Stack = createNativeStackNavigator<MainNavigatorParams>();
const Tab = createBottomTabNavigator<MainNavigatorParams>();

export default function Routing() {
  const routeName = useAppSelector(selectActiveRouteName);
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: theme.font.size.regular,
        },
        tabBarItemStyle: {
          paddingTop: 2,
        },
        tabBarActiveTintColor: theme.colors.secondary200,
        tabBarActiveBackgroundColor: theme.colors.primary800,
        tabBarInactiveTintColor: theme.colors.secondary300,
        tabBarInactiveBackgroundColor: theme.colors.primary900,
      }}>
      <Tab.Screen
        name={t(`navigation.${Routes.Home}`) as Routes.Home}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => (
            <MCIcon
              name="home"
              size={30}
              color={`${
                routeName.includes(Routes.Home)
                  ? theme.colors.secondary200
                  : theme.colors.secondary400
              }`}
            />
          ),
        }}
      />
      <Tab.Screen
        name={t(`navigation.${Routes.Search}`) as Routes.Search}
        component={SearchStackNavigator}
        options={{
          tabBarIcon: () => (
            <MIcon
              name="search"
              size={30}
              color={`${
                routeName.includes(Routes.Search)
                  ? theme.colors.secondary200
                  : theme.colors.secondary400
              }`}
            />
          ),
        }}
      />

      <Tab.Screen
        name={t(`navigation.${Routes.Categories}`) as Routes.Categories}
        component={CategoriesStackNavigator}
        options={{
          tabBarIcon: () => (
            <MCIcon
              name="format-list-bulleted"
              size={30}
              color={`${
                routeName.includes(Routes.Categories)
                  ? theme.colors.secondary200
                  : theme.colors.secondary400
              }`}
            />
          ),
        }}
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
        name={Routes.Details}
        component={screens.Details}
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
        name={Routes.Details}
        component={screens.Details}
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
        name={Routes.Details}
        component={screens.Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
