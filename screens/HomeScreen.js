import React from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Header from './../components/Header';
import Stories from './../components/Stories';
import Post from './../components/Post';
import { POSTS } from './../data/users';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {
                    POSTS.map((post, index) => (
                        <Post post={post} key={index}/>
                    ))
                }
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})
export default HomeScreen
