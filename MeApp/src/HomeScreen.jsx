import { View,Image,Text,StyleSheet,Button,Alert,} from "react-native";

export default function HomeScreen({navigation}) {
    
  return (
            <View style={styles.container}>
                <View>
                    <Image 
                    source={require('./Img/profilepic.jpg')} 
                    style = {styles.BorderClass}
                    />
                </View>

                <View>
                    <Text style={styles.text}>
                        Khushi Arora
                    </Text>
                </View>

                <View style={styles.button}>
                    <Button
                        title="About Me"
                        onPress={() => navigation.navigate('AboutMe')}
                    />
                </View>
                <View style={styles.button}>
                <Button
                    title="Projects"
                    color="#f194ff"
                    onPress={() => navigation.navigate('Projects')}
                />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Random Facts"
                        onPress={() => Alert.alert('Under Construction')}
                    />
                </View>
                 
            </View>
  );
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  BorderClass:{
 width: 200,
 height: 200,
 borderWidth: 4.5,
 borderRadius: 100,
 borderColor: 'black',
 },
 button: {
    paddingVertical: 15,
        
  },
  text:{
    fontSize: 40,
    color: 'pink',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
  textShadowOffset: {width: 2, height: 2},
  textShadowRadius: 2,
    margin: 5,
  }
});
