import React from 'react';
import { View, Text } from 'react-native';
import { PostType } from '../../../../types';
import styles from './styles';
import CommentButton from '../../../CommentButton';
import { MaterialCommunityIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons'
import LikeButton from '../../../LikeButton';
import { API, graphqlOperation, Auth } from 'aws-amplify';

import {getPost} from '../../../../src/graphql/queries';
import ShareButton from '../../../ShareButton';

export type FooterContainerProps = {
    post: PostType,
}
const Footer = ({ post }: FooterContainerProps) => {

    const [myLike, setMyLike] = React.useState(null);
    const [likesCount, setLikesCount] = React.useState(0);
    const [user, setUser] = React.useState(null);
    const [postt, setPost] = React.useState(null);
   
    React.useEffect(() => {
        const fetchPost= async () => {
            const postData = await API.graphql(graphqlOperation(getPost, { id: post.id}));
            setPost(postData.data.getPost);
        }
        fetchPost();

        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setUser(userInfo);
            if (post.likes && post.likes.items) {
                const searchedLike = post.likes.items.find(
                    (like) => like.userID === userInfo.attributes.sub
                );
                setMyLike(searchedLike);
            }
        }
        fetchUser();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <CommentButton post={post} ></CommentButton>
            </View>
            <View style={styles.iconContainer}>
                {myLike? <LikeButton post={post} like={myLike}/> : <LikeButton post={post} />}
            </View>
            <View style={styles.iconContainer}>
                {post && <ShareButton post={post}></ShareButton>}
            </View>
        </View>
    )
}

export default Footer;
