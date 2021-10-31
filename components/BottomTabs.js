import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { BOTTOMTABICONS } from '../data/users';

const BottomTabs = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{uri: icon.inactive}} style={styles.icon}/>
        </TouchableOpacity>
    )
    return (
        <View style={styles.container}>
            {BOTTOMTABICONS.map((icon, index) => (
                <Icon icon={icon} key={index} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 15,
        paddingBottom: 15
    },
    icon: {
        width: 30,
        height: 30
    }

})
export default BottomTabs
