import * as React from 'react';
import { FlatList, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import ProfilePost from '../components/ProfilePost';
import { listUsers, getUser } from '../src/graphql/queries';
import { useNavigation, useRoute } from '@react-navigation/native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { Text, View } from '../components/Themed';
import AthleteFinderFilterButton from "../components/AthleteFinderFilterButton";


export default function AthleteFinderScreen() {
  const navigation = useNavigation();
  const [mainGym, setMainGym] = React.useState("");
  const [mainSport, setMainSport] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const route = useRoute();
  React.useEffect(() => {

    const fetchMyUser = async () => {

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
    fetchMyUser();
    if (!user) {
      return;
    }
    const fetchUsers = async () => {
      try {
        const followingData = await API.graphql(
          graphqlOperation(
            listUsers, {
            filter: {
              mainGym: { contains: mainGym },
              mainSport: { contains: mainSport },
              level: { contains: level }
            }
          }
          )
        );
        setUsers(followingData.data.listUsers.items);
       // setUsers(setMutuals(followingData.data.listUsers.items));
      } catch (e) {
        console.log(e);
      }
    }
    fetchUsers();
  }, [])

  //Takes array of users fetched by AthleteFinder and compares 
  //each user's folling list to the current user's folling list and 
  //sort the array by the number of mutual follows
  const setMutuals = (listOfUsers) => {
    let users=listOfUsers;
    users.forEach(element => {
      let count = 0;
      const followedByUser = element.followInfo.followed;
      const followedByMe = user.followInfo.followed;
      for (let i = 0; i < followedByMe.length; i++) {
        for (let x = 0; x < followedByUser.length; x++) {
          if (followedByUser[x].userID == followedByMe[i].userID) {
            count++;
            break;
          }
        }
      }
      element = { ...element, numberOfMutuals: count }
    });
    users.sort((a,b)=>(a.numberOfMutuals>b.numberOfMutuals)? 1:-1);
    return users;

  }

  //Fetch new users list to be passed to filter component
  const fetchUsers = async () => {
    try {
      const followingData = await API.graphql(
        graphqlOperation(
          listUsers, {
          filter: {
            mainGym: { contains: mainGym },
            mainSport: { contains: mainSport },
            level: { contains: level },
          }
        }

        )
      );
      setUsers(followingData.data.listUsers.items);
    } catch (e) {
      console.log(e);
    }
  }
  const setFilterSettings = (filter) => {
    setMainGym(filter.mainGym);
    setMainSport(filter.mainSport);
    setLevel(filter.level);
  }

  React.useEffect(() => {
    const result = route.params?.filter;
    if (result) {
      setFilterSettings(result);
      fetchUsers();
    }
  }, [])
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const result = route.params;
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);





  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{ width: '100%' }}
          data={users}
          renderItem={({ item }) => <ProfilePost user={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <AthleteFinderFilterButton props={setFilterSettings} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },
});