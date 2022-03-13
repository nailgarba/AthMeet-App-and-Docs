import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Colors from "../../constants/Colors";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, } from "react-native";
import { API, Auth, graphqlOperation, } from 'aws-amplify';
import { createMessage, updateChatRoom, } from '../../src/graphql/mutations';
import { MaterialIcons, Ionicons, Entypo, Fontisto, } from '@expo/vector-icons';

const InputBox = (props) => {

    const chatRoomID  = props.chatRoomID;
    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserId(userInfo.attributes.sub);
        }
        fetchUser();
    }, [])

    const updateChatRoomLastMessage = async (messageId: string) => {
        try {
            await API.graphql(
                graphqlOperation(
                    updateChatRoom, {
                    input: {
                        id: chatRoomID,
                        lastMessageID: messageId,
                    }
                })
            );
        } catch (e) {
            console.log(e);
        }
    }
    const onSendPress = async () => {
        try {
            const newMessageData = await API.graphql(
                graphqlOperation(
                    createMessage, {
                    input: {
                        content: message,
                        userID: myUserId,
                        chatRoomID
                    }
                })
            )
            await updateChatRoomLastMessage(newMessageData.data.createMessage.id)
        } catch (e) {
            console.log(e);
        }
        setMessage('');
    }

    return (
        
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <TextInput
                        placeholder={"Write a message"}
                        style={styles.textInput}
                        multiline
                        value={message}
                        onChangeText={setMessage}
                    />
                    <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                </View>
                <TouchableOpacity onPress={onSendPress}>
                    <View style={styles.buttonContainer}>
                        <Ionicons name="md-send" size={28} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
    )
}

export default InputBox;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0,
        padding:3,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        marginRight: 5,
        padding: 10,
        paddingRight:15,
        borderRadius: 25,
    },
    textInput: {
        marginHorizontal: 10,
        flex: 1,
    },
    buttonContainer: {
        width: 45,
        height: 45,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        margin:2,
    }
})



