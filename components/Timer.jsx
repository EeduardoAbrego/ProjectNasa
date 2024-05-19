import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Timer ({time, setTime, currentTime}) {

    const formatTime = `${Math.floor(time / 60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2,"0") } `

   

    return (
        <View style={styles.contador} >
            <Text style={{fontSize: 80 , fontWeight: "bold",}} >{formatTime}</Text>
        </View>
    )
} 


const styles = StyleSheet.create({
    contador: {
        backgroundColor: "#8b8787" , 
        borderRadius: 12 ,
        flex: 0.3 ,
        alignItems: "center" ,
        justifyContent: "center" ,
        marginTop: 10 ,
        
        
    }
})