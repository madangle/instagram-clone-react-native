import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import USERS from './../data/users';

const Stories = () => {
    return (
        <View styles={{maginBottom: 13}}>
          <Text style={{color: 'white'}}>Stories</Text>
          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              USERS.map((story, index) => {
                <Image 
                  source={{
                    uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png"
                  }}
                />
              })
            }
              
          </ScrollView> */}

        </View>
    )
}

styles = StyleSheet.create({ 

})
export default Stories
