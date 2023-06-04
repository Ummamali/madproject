import * as React from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.icon1}>
          <Icon name="chevron-left" size={24} color="#000000" />
        </View>
        <Text style={styles.h1}>Payment Methods</Text>
      </View>
      <View>
        <View style={styles.mainpic}>
          <View style={styles.cpic}>
            <Image style={styles.pic2} source={require('./Assests/c1.png')} />
          </View>
          <View style={styles.cpic}>
            <Image style={styles.pic2} source={require('./Assests/c2.png')} />
          </View>
          <View style={styles.cpic}>
            <Image style={styles.pic2} source={require('./Assests/c2.jpg')} />
          </View>
          <View style={styles.cpic}>
            <Image style={styles.pic2} source={require('./Assests/c2.png')} />
          </View>
        </View>

        <View style={styles.dcontainer}>
          <View style={styles.c1}>
            <Text>Card No</Text>
            <Text style={styles.c11}>123 456 789</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.c1}>
            <Text>Card Holder</Text>
            <Text style={styles.c11}>John Smith</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.cf}>
            <View>
              <Text style={styles.c3}>Expiray Date</Text>
              <Text style={styles.c11}>09 05 2024</Text>
            </View>

            <View>
              <Text style={styles.c3}>CCV</Text>
              <Text style={styles.c11}>123 456 789</Text>
            </View>
          </View>
          <View style={styles.verticalLine} />
        </View>
        <View>
          <TouchableOpacity
            style={styles.bt1}
            onPress={() => navigation.navigate('ThankYou')}>
            <Text style={styles.btext}>Finish Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    position: 'relative',
    padding: 20,
  },
  icon1: {
    marginLeft: 2,
    marginTop: 50,
  },
  cpic: {
    marginTop: 10,
    marginLeft: 4,
  },
  mainpic: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  verticalLine: {
    width: '94%',
    height: 1,
    marginVertical: 8,
    backgroundColor: '#fff',
    opacity: 0.7,
  },
  c11: {
    color: '#E2D4D2',
  },

  cf: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 4,
  },
  c1: {
    marginRight: 200,
  },
  c2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  bt1: {
    alignItems: 'center',
    marginTop: 20,
  },
  btext: {
    backgroundColor: '#0090FF',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 50,
    textAlign: 'center',
    width: '50%',
    marginTop: 20,
  },
  c3: {
    marginRight: 90,
  },
  h1: {
    marginTop: 50,
    marginLeft: 20,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container1: {
    marginTop: 30,
  },
  pic2: {
    width: 60,
    height: 50,
    borderRadius: 10,
  },
  dcontainer: {
    backgroundColor: '#0090FF',
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },

  lastView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F27320',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 150,
  },
  container1: {
    flexDirection: 'row',
  },
});
