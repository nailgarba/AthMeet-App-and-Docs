import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TextInput, FlatList } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { MaterialIcons, } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PrivateMessagesFeed from '../components/PrivateMessagesFeed';
import ChatListItem from '../components/ChatListItem';
import { API, graphqlOperation, Auth, } from 'aws-amplify';
import { getUser, listChatRooms } from '../customgraphql/queries';
import NewChatButton from '../components/NewChatButton';
import BackButton from '../components/BackButton';

export default class PrivateMessagesListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatRooms: [],
    }
  
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        const userData = await API.graphql(
          graphqlOperation(
            listChatRooms, {
            id: userInfo.attributes.sub,
          }
          )
        )
        if (userData) {
          this.setState({
            chatRooms: userData.data.getUser.chatRoomUser.items
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchChatRooms();
  }

  fetchChatRooms = async () => {
    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const userData = await API.graphql(
        graphqlOperation(
          listChatRooms, {
          id: userInfo.attributes.sub,
        }
        )
      )
      if (userData) {
        this.setState({
          chatRooms: userData.data.getUser.chatRoomUser.items
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  reloadPrivateMessagesList(){
    this.fetchChatRooms();
  }
  
  //Refresh list when screen comes into view
  componentDidMount(){
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.fetchChatRooms();
    });
  }

  render(){

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <NewChatButton ></NewChatButton>
      </View>
      <View style={styles.chatsContainer}>
        {this.state.chatRooms && <PrivateMessagesFeed chatRooms={this.state.chatRooms} reloadPrivateMessagesList={this.fetchChatRooms.bind(this)} />}
        {this.state.chatRooms.items ?  <Text> Start a chat</Text> :<View /> }
      </View>
    </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 25,
    paddingBottom: 5,
    backgroundColor: '#e3e3e3',
  },
  backButton: {

  },
  chatsContainer: {
    width: '100%',
  }
});