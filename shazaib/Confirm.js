import React, { useEffect, useState } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { getDatabase, ref, child, onValue } from 'firebase/database';
import LinearGradient from 'react-native-linear-gradient';


const Confirm = ({navigation,route})=>{
    const [record, setRecord] = useState(null);

    useEffect(() => {
      const { recordId } = route.params;
      const dbRef = ref(getDatabase());
      const recordRef = child(dbRef, recordId);
  
      onValue(recordRef, (snapshot) => {
        const data = snapshot.val();
        setRecord(data);
      });
  
      return () => {
        // Clean up the database listener when the component unmounts
        setRecord(null);
      };
    }, [route.params]);

    const handlePress = ()=>{
        navigation.navigate('Result');
    }
  
    return(
        <View>
            <Text style={styles.title}>Ticket Confirmation</Text>

            <View style={styles.textBox}>
                {record && (
                    <View>
                    <Text style={styles.text}>Name: {record.name}</Text>
                    <Text style={styles.text}>Age: {record.age}</Text>
                    <Text style={styles.text}>Email: {record.email}</Text>
                    <Text style={styles.text}>Phone: {record.phone}</Text>
                    <Text style={styles.text}>Price: Rs5000/-</Text>
                    </View>
                )}
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <LinearGradient colors={['#F4D03F', '#16A085']} style={styles.gradient}>
                    <Text style={styles.Text}>Done</Text>
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
        height: 200,
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
export default Confirm;