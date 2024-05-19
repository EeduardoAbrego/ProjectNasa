import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Platform, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Timer from './components/Timer';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';
import ButtonStart from './components/ButtonStart';

const  margin = Constants.statusBarHeight;
const colors = ["#69c979",  "#677bd6" , "#8ce7d1" ]

export default function App() {

 
  const [currentTime, setCurrentTime] = useState("Pomo" | "short" | "breack");
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

 
  useEffect(()=> {
   let interval = null;

    if(isActive) {
      interval = setInterval(()=> {
        setTime(time - 1);
      }, 1);
    } else {
       clearInterval(interval);
    }
    
    if(time === 0) {
      setIsActive(false);
      setTime(currentTime === 0 ? 1500 : currentTime === 1 ? 300 : 900);
    }

    return ( ) => clearInterval(interval);
  }, [isActive, time])


 return (
    <View style={[styles.container, {backgroundColor: colors[currentTime]}] }>
      <View style={{flex:1, margin: 15}} >
        <Text style={styles.title} >Pomodoro</Text>

        <StatusBar backgroundColor={`${ colors[currentTime]}`} style="auto" />

        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />

        <Timer time={time} setTime={setTime} currentTime={currentTime}/>

        <ButtonStart isActive={isActive} setIsActive={setIsActive} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: margin,
    backgroundColor: '#fff', 
  },
  title:{
    fontSize:30, 
    fontWeight: "bold",
    borderRadius: 12,
    backgroundColor: "#d18624" ,
    padding: 10,
    textAlign: "center",
  }
  
});
