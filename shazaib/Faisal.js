import React from 'react';
import { View,Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Faisal = ({navigation})=>{
    const handlePress = ()=>{
        navigation.navigate('Purchase Ticket');
    }
  
    return(
        <View>
            <Text style={styles.title}>Faisal Mosque</Text>
            <Image source={require('./images/2.jpeg')} style={styles.image}/>
            <View style={styles.textBox}>
                <Text style={styles.text}>The Faisal Mosque (Urdu: فیصل مسجد, romanized: faisal masjid) is the national mosque of Pakistan, located in capital Islamabad. It is the fifth-largest mosque in the world and the largest within South Asia, located on the foothills of Margalla Hills in Pakistan's capital city of Islamabad. It is named after the late King Faisal of Saudi Arabia.</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <LinearGradient colors={['#F4D03F', '#16A085']} style={styles.gradient}>
                    <Text style={styles.Text}>Purchase Ticket</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}
const styles={
    title: {
        fontFamily:'Roboto',
        fontSize:45,
        fontWeight:'bold',
        color:'black',
        padding: 20
    },
    image: {
        width: 380,
        height: 250,
        borderRadius: 10,
        alignSelf:'center'
    },
    textBox:{
        backgroundColor: '#CECECE',
        padding: 10,
        margin:20,
        alignItems:'flex-start'
    },
    text:{
        fontFamily:'Roboto',
        color:'black',
        fontSize:20,
    },
    button:{
        width: '90%',
        alignSelf:'center'
        
    },
    Text:{
        color:'white',
        fontWeight:"bold",
        alignSelf:"center"
    },
    gradient: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
    },

}
export default Faisal;