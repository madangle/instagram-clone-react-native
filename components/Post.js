import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
// import { Divider } from 'react-native-elements'

const Post = ({post}) => {
   return (
        <View style={{marginBottom: 30}}>
            {/* add divider over here */}
            <PostHeader post={post} />
            <PostImage post={post} />
        </View>
    )
}

const PostHeader = ({post}) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
            alignItems: 'center'
        }}
    >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image 
                source={{uri: post.profile_picture}} 
                style={styles.story}
            />
            <Text style={{color: 'white', marginLeft: 5, fontWeight: '800'}} >
                {post.user}
            </Text>
        </View>
        <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View
        style={{
            width: '100%',
            height: 450,
            marginTop: 5
        }}
    >
        <Image 
            source={{uri: post.imageUrl}} 
            style={styles.postImage}
        />
    </View>
)

const styles = StyleSheet.create({ 
    story:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 2,
        borderColor: '#FF8501'
    },
    postImage: {
        height: '100%',
        resizeMode: 'cover'
    }
})
export default Post
