import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import ProfilePicture from '../components/ProfilePicture'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import SearchScreen from '../screens/SearchScreen';
import AthleteFinderScreen from '../screens/AthleteFinderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PrivateMessagesListButton from '../components/PrivateMessagesListButton';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from '../src/graphql/queries';
import { View } from '../components/Themed';


import { BottomTabParamList, HomeNavigatorParamList, SearchNavigatorParamList, AthleteFinderNavigatorParamList, ProfileNavigatorParamList, TabTwoNavigatorParamList } from '../types';
import SignOutButton from '../components/SignOutButton';

const BottomTab = createBottomTabNavigator<HomeNavigatorParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'tomato' //activeTintColor: Colors[colorScheme].tint
        //,showLabel:false
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="AthleteFinder"
        component={AthleteFinderNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="people-arrows" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="weight" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // get the current user
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!userInfo) {
        return;
      }

      try {
        const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchUser();
  }, [])


  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRightContainerStyle: { marginRight: 15 },
          headerRight: () => (<PrivateMessagesListButton />),
          headerTitle: () => (<FontAwesome5 name={"dumbbell"} size={40} color='tomato'></FontAwesome5>),
          headerTitleContainerStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          headerLeftContainerStyle: { marginLeft: 10 },
          headerLeft: () => (
            <ProfilePicture size={40} user={user ? user : ""} />
          )/**/
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}


const SearchScreenStack = createStackNavigator<SearchNavigatorParamList>();

function SearchNavigator() {
  return (
    <SearchScreenStack.Navigator>
      <SearchScreenStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: () => (<FontAwesome5 name={"dumbbell"} size={40} color='tomato'></FontAwesome5>),
          headerTitleContainerStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
    </SearchScreenStack.Navigator>
  );
}

const ProfileScreenStack = createStackNavigator<ProfileNavigatorParamList>();

function ProfileNavigator() {
  return (
    <ProfileScreenStack.Navigator>
      <ProfileScreenStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: () => (<FontAwesome5 name={"dumbbell"} size={40} color='tomato'></FontAwesome5>),
          headerTitleContainerStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          headerRightContainerStyle: { marginRight: 25 },
          headerRight: () => (<SignOutButton />),
          headerLeftContainerStyle: { marginLeft: 10 },
          headerLeft: () => (<View/>)
        }}
      />
    </ProfileScreenStack.Navigator>
  );
}

const AthleteFinderScreenStack = createStackNavigator<AthleteFinderNavigatorParamList>();

function AthleteFinderNavigator() {
  return (
    <AthleteFinderScreenStack.Navigator>
      <AthleteFinderScreenStack.Screen
        name="AthleteFinderScreen"
        component={AthleteFinderScreen}
        options={{
          headerTitle: () => (<FontAwesome5 name={"dumbbell"} size={40} color='tomato'></FontAwesome5>),
          headerTitleContainerStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
    </AthleteFinderScreenStack.Navigator>
  );
}

