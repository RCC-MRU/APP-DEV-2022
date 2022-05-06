import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function AboutMe({ navigation }) {

    const onPressHandler = () => {
        navigation.navigate('Projects');
    }

    return (
        <ScrollView style={{backgroundColor:'black'}}>
        <View style={styles.body}>
            <Text style={styles.text}>
            I am a graphic designer, currently pursuing my Bachlors of Technology in Computer Science and Engineering.
            I have designed numerous Book Covers, Stickers and Logos as a freelancer and have conducted various graphic contests. Currently, I am exploring the world of web developement.
        </Text>
        
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? 'pink' : 'cyan' })}
            >
                <Text style={styles.text}>
                Checkout My Work!
             </Text>
            </Pressable>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
    },
    text: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        margin: 10,
        padding:10,
    }
})