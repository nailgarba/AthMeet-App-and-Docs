import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listPrivatePosts,listPosts } from '../../customgraphql/queries';
/*
import posts from '../../data/posts';
*/
import Post from '../Posts';
import { UserType } from '../../types';

export type ProfilePostProps = {

    user: UserType,
}


const PrivateFeed = ({user}: ProfilePostProps) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchPosts = async () => {
        setLoading(true);
        //get posts from Database
        try {
            const postsData = await API.graphql(graphqlOperation(listPosts,{
                filter: {
                    userID: {
                        beginsWith: user.id
                    }
                }

            }
                ));
            setPosts(postsData.data.listPosts.items);
        }
        catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }


    }
    React.useEffect(() => {
        fetchPosts();
    }, [])



    return (
        <View style={{ width: '100%' }}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={(item) => item.id}
                refreshing={loading}
                onRefresh={fetchPosts}
            />

        </View>
    )
}

export default PrivateFeed;
