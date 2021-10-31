import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
// import { Divider } from 'react-native-elements'
import {POSTFOOTERICONS} from '../data/users';

const Post = ({post}) => {
   return (
        <View style={{marginBottom: 30}}>
            {/* add divider over here */}
            <PostHeader post={post} />
            <PostImage post={post} />
            <PostFooter />
            <Likes likes={post.likes}/>
            <Caption caption={post.caption}/>
            <Comments post={post}/>
            <CommentsList post={post}/>
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

const PostFooter = () => (
    <View style={{ marginHorizontal: 15, marginTop: 10, flexDirection: 'row'}}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon
                imgStyle={styles.footerIcon} 
                imgUrl={POSTFOOTERICONS[0].imageUrl}
            />
            <Icon
                imgStyle={styles.footerIcon} 
                imgUrl={POSTFOOTERICONS[0].imageUrl}
            />
            <Icon
                imgStyle={styles.footerIcon} 
                imgUrl={POSTFOOTERICONS[0].imageUrl}
            />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end'}}>
            <Icon
                imgStyle={styles.footerIcon} 
                imgUrl={POSTFOOTERICONS[0].imageUrl}
            />
        </View>
    </View>
)

const Icon = ({imgStyle, imgUrl}) => {
    return (<TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}} />
    </TouchableOpacity>)
}

const Likes = ({likes}) => (
    <View style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{color: 'white', fontWeight: '600'}} >
        {likes} likes
        </Text>
    </View>
)

const Caption = ({caption}) => (
    <View style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{color: 'white', fontWeight: '600'}} >
            <Text style={{fontWeight: '800', marginLeft: 5}} >
                Rishikesh &nbsp;
            </Text>
        {caption}
        </Text>
    </View>
)

const Comments = ({ post }) => (
    <View style={{marginTop: 5}}>
        {
            !!post.comments.length && (
                <Text style={{ color: 'grey'}}> 
                    View { post.comments.length > 1 ? 'all' : '' } {post.comments.length} { post.comments.length > 1 ? 'comments' : 'comment' }
                </Text>
            )
        }
       
    </View>
)

const CommentsList = ({ post }) => (
    <View style={{marginTop: 5}}>
        { post.comments.map((comment, index) => (
            <Text style={{color: 'white'}} key={index}>
                <Text style={{fontWeight: '800'}}>
                    {comment.user} &nbsp;
                </Text>
                <Text style={{fontWeight: '600', marginLeft: 2}}>
                    {comment.comment}
                </Text>
            </Text>
        ))}
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
    },
    footerIcon: {
        width: 33,
        height: 33,
        marginRight: 15
    },
    leftFooterIconsContainer : {
        flexDirection: 'row'
    }
})
export default Post
