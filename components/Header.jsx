import {View , Text, TouchableOpacity , StyleSheet} from "react-native"


export default  function Header ({currentTime, setCurrentTime, setTime}) {

    const options = ["Pomodoro", "Short", "Breack"]; 

    const handlePress = (index) => {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60);
       
    };

    return (
        <View style={styles.options} >
          {options.map((item, index) => (
            <TouchableOpacity onPress={() => handlePress(index)} style={[styles.items, currentTime !== index && { borderColor: "transparent" }]}  key={index} >
                <Text style={{textAlign: "center", fontWeight: "bold",}} > {item}</Text>
            </TouchableOpacity>
           ))

        }
        </View>
    );
} ;

const styles = StyleSheet.create({
    options: {
        flexDirection: "row",
        flex: 0.06 , 
        marginTop: 10 ,
    },
    items: {
        borderWidth: 3,
        justifyContent: "center",
        width: "33%",
        borderRadius: 12,
        
    }
})