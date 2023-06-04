import React from 'react';
import { View,Text,TouchableOpacity,Image} from 'react-native';
const Result = ({navigation})=>{
    const handlePress = (pic)=>{
        if(pic.id == 2 ){
            navigation.navigate('Faisal Mosque');
        }
        
    }
    const Data=[
        {id:1,source:require('./images/1.jpg'),text:'Pakistan Monument'},
        {id:2,source:require('./images/2.jpeg'),text:'Shah Faisal Mosque'},
        {id:3,source:require('./images/3.jpeg'),text:'Allah Ditta Caves'},
        {id:4,source:require('./images/4.jpeg'),text:'Centauras Mall'},
        {id:5,source:require('./images/5.jpg'),text:'Supreme Court'},

    ]
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Islamabad</Text>
            <View style={styles.grid}>
                {Data.map((pic)=>(
                    <TouchableOpacity
                    key={pic.id}
                    style={styles.Item}
                    onPress={()=>handlePress(pic)}
                    >
                        <Image source={pic.source} style={styles.picture}/>
                        <Text style={styles.text}>{pic.text}</Text>

                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
const styles ={
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontFamily:'Roboto',
        fontSize:50,
        fontWeight:'bold',
        color:'black'
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    Item: {
      width: '40%',
      margin: '5%',
      alignItems: 'center',
    },
    picture: {
      width: 150,
      height: 150,
      borderRadius: 10,
    },
    text: {
        fontFamily:'Roboto',
        color:'black',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
  };
  
export default Result;