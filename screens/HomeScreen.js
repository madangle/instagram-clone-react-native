import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Header from './../components/Header';
import Stories from './../components/Stories';
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
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
