import React from 'react';
import {View, Text} from 'react-native';
import LeftContainer from './LeftContainer';
import MainContainer from './MainContainer';
import { PostType } from '../../types';

import styles from './styles'

export {PostType} from '../../types'

export type PostProps = {
post: PostType,
}
const Post = ({post}: PostProps) => (
    <View style= {styles.container}>
       <LeftContainer user={post.user}/>
       <MainContainer post={post}/> 
    </View>
)

export default Post;