import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Audio } from 'expo-av';


export default  function ButtonStart ({isActive, setIsActive}) {

    const handlePress = () => {
        playSaund()
        setIsActive(!isActive)
    
      };

      const playSaund = async ( ) => {
        const {sound} = await  Audio.Sound.createAsync(require("../assets/tap-notification-180637.mp3"));
        await sound.playAsync();
       };

    return (
        <View style={{flex: 1}} >
            <TouchableOpacity style={styles.button} onPress={() => handlePress()} >
               <Text style={{fontSize: 40 , fontWeight: "bold"}} >{isActive ? "Stop" : "Start"}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#56a0e6" ,
        borderRadius: 10 ,
        alignItems: "center" ,
        marginTop: 15,
    }
})