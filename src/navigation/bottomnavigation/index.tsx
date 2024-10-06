import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screen/home/home';
import Account from '../../screen/account/Account';
import FAVOURITES from '../../screen/favourite/favourites';
import Menu from '../../screen/menu';
import { Image } from 'react-native';
import icon from '../../assets/icon/index'

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        let style;
        if (route.name === 'HOME') {
          style = {height: 22, width: 20}
          if (focused) {
            iconName = icon.home;
          } else {
            iconName = icon.home2;
          }
        }
        if (route.name === 'ACCOUNT') {
          style = {height: 22, width: 20}
          if (focused) {
            iconName = icon.profile2;
          } else {
            iconName = icon.profile;
          }
        }
        if (route.name === 'FAVOURITES') {
          style = {height: 22, width: 20}
          if (focused) {
            iconName = icon.star;
          } else {
            iconName = icon.star;
          }
        }
        if (route.name === 'MENU') {
          style = {height: 20, width: 20}
          if (focused) {
            iconName = icon.menu2;
          } else {
            iconName = icon.menu;
          }
        }

        return <Image source={iconName} style={style} />;
      },
      tabBarActiveTintColor: '#000000',
      tabBarInactiveTintColor: '#60707D',
    })}
    >
      <Tab.Screen name="HOME" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="ACCOUNT" component={Account} options={{headerShown:false}}/>
      <Tab.Screen name="FAVOURITES" component={FAVOURITES} options={{headerShown:false}}/>
      <Tab.Screen name="MENU" component={Menu} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}