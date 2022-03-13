import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';
import users from '../../data/users';
import { UserType } from '../ProfileScreenComponents';


import {
    API,
    graphqlOperation,
    Auth,
  } from "aws-amplify";
import {
    createChatRoom,
    createChatRoomUser
  } from '../../src/graphql/mutations';


export type NewChatProps = {
  user: UserType;
}

const GoToChatButton = ( props:NewChatProps) => {
    const { user } = props;
    const userID = user.id;
    const navigation = useNavigation();

    const onClick = async () => {
      try {
  
        //  1. Create a new Chat Room
        const newChatRoomData = await API.graphql(
          graphqlOperation(
            createChatRoom, {
              input: {
                lastMessageID: "zz753fca-e8c3-473b-8e85-b14196e84e16"
              }
            }
          )
        )
  
        if (!newChatRoomData.data) {
          console.log(" Failed to create a chat room");
          return;
        }
  
        const newChatRoom = newChatRoomData.data.createChatRoom;
  
        // 2. Add `user` to the Chat Room
        await API.graphql(
          graphqlOperation(
            createChatRoomUser, {
              input: {
                userID: userID,
                chatRoomID: newChatRoom.id,
            }
        }
        )
        )
 
        //  3. Add authenticated user to the Chat Room
        const userInfo = await Auth.currentAuthenticatedUser();
        await API.graphql(
          graphqlOperation(
            createChatRoomUser, {
              input: {
                userID: userInfo.attributes.sub,
                chatRoomID: newChatRoom.id,
              }
            }
          )
        )
  
        navigation.navigate('ChatRoom', {
          id: newChatRoom.id,
          name: user.name,
        })
  
      } catch (e) {
        console.log(e);
      }
    }


  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onClick}
    >
      <FontAwesome5 name={"envelope"} size={30} color='tomato'></FontAwesome5>
    </TouchableOpacity>
  )
}

export default GoToChatButton;

const styles = StyleSheet.create({
  button: {
    marginRight:15,
  }
});

