import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
//
import global from '../global';
import screens from '../screens';
import {MainNavigatorParams, Routes} from '../Types';
import {useAppSelector} from '../store/hooks';
import {selectActiveRouteName} from '../store/slices/appStateSlice';
//
import {style} from './routes.style';
import theme from '../styles/theme';

const Stack = createNativeStackNavigator<MainNavigatorParams>();
const Tab = createBottomTabNavigator<MainNavigatorParams>();

export default function Routing() {
  const routeName = useAppSelector(selectActiveRouteName);
  const {t} = useTranslation();
  const {navigate} = useNavigation();

  useEffect(() => {
    if (routeName === 'Home-nested') {
      setSelectedTab('home');
    } else if (routeName === 'Search-nested') {
      setSelectedTab('search');
    } else if (routeName === 'Categories-nested') {
      setSelectedTab('categories');
    }
  }, [routeName]);

  const [selectedTab, setSelectedTab] = useState<
    'home' | 'search' | 'categories'
  >('home');

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => (
        <View style={style.outerWrap}>
          <View style={style.innerWrap}>
            <global.components.IconButton
              style={style.icon}
              onPress={() => {
                navigate({name: Routes.Home, params: {}});
                setSelectedTab('home');
              }}>
              <MCIcon
                name="home"
                size={25}
                color={`${
                  selectedTab === 'home'
                    ? theme.colors.gray400
                    : theme.colors.primary500
                }`}
              />
            </global.components.IconButton>
            <global.components.IconButton
              style={style.icon}
              onPress={() => {
                navigate({name: Routes.Search, params: {}});
                setSelectedTab('search');
              }}>
              <MIcon
                name="search"
                size={25}
                color={`${
                  selectedTab === 'search'
                    ? theme.colors.primary200
                    : theme.colors.primary500
                }`}
              />
            </global.components.IconButton>
            <global.components.IconButton
              style={style.icon}
              onPress={() => {
                navigate({name: Routes.Categories, params: {}});
                setSelectedTab('categories');
              }}>
              <MCIcon
                name="format-list-bulleted"
                size={25}
                color={`${
                  selectedTab === 'categories'
                    ? theme.colors.primary200
                    : theme.colors.primary500
                }`}
              />
            </global.components.IconButton>
          </View>
        </View>
      )}>
      <Tab.Screen
        name={t(`navigation.${Routes.Home}`) as Routes.Home}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name={t(`navigation.${Routes.Search}`) as Routes.Search}
        component={SearchStackNavigator}
      />

      <Tab.Screen
        name={t(`navigation.${Routes.Categories}`) as Routes.Categories}
        component={CategoriesStackNavigator}
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
