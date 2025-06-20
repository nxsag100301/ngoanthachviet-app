/* eslint-disable react-native/no-inline-styles */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Auction, Home, Profile, PurchaseOrder } from '../../screens';
import { Image, StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const bottomTab = [
  {
    id: 1,
    name: 'home',
    title: 'Trang chủ',
    component: Home,
    icon: require('../../assets/icons/bottomTab/home.png'),
  },
  {
    id: 2,
    name: 'purchaseOrder',
    title: 'Đơn mua',
    component: PurchaseOrder,
    icon: require('../../assets/icons/bottomTab/bag.png'),
  },
  {
    id: 3,
    name: 'auction',
    title: 'Đấu giá',
    component: Auction,
    icon: require('../../assets/icons/bottomTab/auction.png'),
  },
  {
    id: 4,
    name: 'profile',
    title: 'Tôi',
    component: Profile,
    icon: require('../../assets/icons/bottomTab/profile.png'),
  },
];

const TabIcon = ({ icon, focused, label }) => {
  return (
    <View style={styles.tabIcon}>
      <Image
        source={icon}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? '#E68D09' : '#8E8E93',
        }}
        resizeMode="contain"
      />
      <Text
        numberOfLines={1}
        style={{
          fontSize: 10,
          lineHeight: 18,
          letterSpacing: 0.15,
          color: focused ? '#E68D09' : '#8E8E93',
        }}
      >
        {label}
      </Text>
    </View>
  );
};
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {bottomTab.map(tab => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ focused }) => (
              <TabIcon icon={tab.icon} focused={focused} label={tab.title} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
  },
  tabIcon: {
    height: 46,
    width: 48,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});

export default BottomTab;
