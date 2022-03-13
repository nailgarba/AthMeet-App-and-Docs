import React from 'react';
import { View, Text } from 'react-native';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';
import { StyleSheet } from 'react-native';
import FollowingButton from '../../FollowingButton';
import FollowersButton from '../../FollowersButton';
import FollowButton from '../../FollowButton';


export type TopContainerProps = {
    user,
}
const TopContainer = ({ user }: TopContainerProps) => {

    return(
    <View style={styles.container}>
        <View style={styles.profilePictureContainer}>
            <ProfilePicture user={user} size={170} />
        </View>
        <View style={styles.namesContainer}>
            <Text style={styles.nameContainer} >{user.name}</Text>
            <Text style={styles.usernameContainer}>@{user.username}</Text>
        </View>
        <View style={styles.followButton}>
            {user.showFollowButton && <FollowButton id={user.id}/>}
        </View>
        <View style={styles.followsContainer}>
            <View style={styles.followsButton}>
            <FollowersButton id={user.id}></FollowersButton>
            </View>
            <View style={styles.followsButton}>
                <FollowingButton id={user.id}></FollowingButton>
            </View>
        </View>
        <View style={styles.content}>
            <Text style={styles.infoTexts}>Main Gym: {user.mainGym}</Text>
            <Text style={styles.infoTexts}>Main Sport: {user.mainSport}</Text>
            <Text style={styles.infoTexts}>Level: {user.level}</Text>
        </View>
    </View>


)}

export default TopContainer;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 'auto',
        flex: 1,
        marginTop: 5,
    },
    profilePictureContainer: {
        marginTop: 15,

        alignItems: 'center',
    },
    namesContainer: {
        alignItems: 'center',
    },
    nameContainer: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        alignItems: 'center',
    },
    usernameContainer: {
        fontSize: 16,
        color: 'gray',
        //alignItems: 'center',
    },
    followButton:{

    },
    followsButton:{
        marginHorizontal:20
    },
    followsContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop: 6,
        marginBottom:6,
        marginHorizontal:10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    followsTexts: {
        marginVertical: 4,
        marginLeft:10,
        marginRight:10,
        fontSize: 20,
       //lineHeight: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        marginVertical: 4,
        fontSize: 20,
        lineHeight: 18,
        alignItems: 'center',
        //justifyContent:'center'

    },
    infoTexts: {
        //marginVertical: 4,
        fontSize: 20,
       // lineHeight: 18,
        alignItems: 'center',
        justifyContent: 'center'

    },
});