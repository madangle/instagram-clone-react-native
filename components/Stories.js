import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { USERS } from './../data/users';

const Stories = () => {
    USERS.map(story => console.log(story.user, story.image));

    return (
        <View style={styles.storyWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((story, index) => {
              return (<View key={index} style={{alignItems: 'center'}}>
                <Image source={{uri: story.image}} style={styles.story} />
                <Text style={styles.userStoryName}>{story.user.split(" ")[0]}</Text>
              </View>)
            })}              
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({ 
  storyWrapper: {
    marginBottom: 15
  },
  userStoryName: {
    color: 'white',
    textAlign: 'center'
  },
  story:{
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#FF8501'
  }
})
export default Stories
