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
import {useNavigation} from '@react-navigation/native';
export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 26, color: '#333', marginBottom: 10}}>
        Hotel Details
      </Text>
      <View style={styles.container1}>
        <Image style={styles.pic2} source={require('./Assests/pic5.jpg')} />
      </View>
      <View>
        <View>
          <Text style={styles.p1}>Room Information</Text>
          <View style={styles.v1}>
            <Text style={styles.smallText}>No of Rooms</Text>
            <Text style={styles.p2}>1</Text>
          </View>
          <View style={styles.v1}>
            <Text style={styles.smallText}>Room Type</Text>
            <Text style={styles.p2}>Air contioned</Text>
          </View>
          <View style={styles.v1}>
            <Text style={styles.smallText}>Rooms</Text>
            <Text style={styles.p2}>3 Nights ($127*3=$381)</Text>
          </View>
          <View style={styles.v1}>
            <Text style={styles.smallText}>Total</Text>
            <Text style={{fontSize: 17, color: '#0090ff'}}>$406.98</Text>
          </View>
          <Text style={styles.p1}>Guest information</Text>
          <View style={styles.v1}>
            <Text style={styles.smallText}>Name</Text>
            <Text style={styles.p2}>John Smith</Text>
          </View>
          <View style={styles.v1}>
            <Text style={styles.smallText}>Email</Text>
            <Text style={styles.p2}>john.smith@gmail.com</Text>
          </View>
          <View style={styles.v1}>
            <Text style={styles.smallText}>Mobile no</Text>
            <Text style={styles.p2}>+923431370293</Text>
          </View>
        </View>
        <View style={styles.verticalLine} />
        <TouchableOpacity
          style={styles.b1}
          onPress={() => navigation.navigate('PaymentMethods')}>
          <Text style={styles.bt1}>Pay Now</Text>
        </TouchableOpacity>
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
  smallText: {
    color: '#777',
  },
  v1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
    marginTop: 45,
  },
  center: {
    alignItems: 'center',
  },
  pic2: {
    width: '100%',
    height: 200,
    borderRadius: 6,
    marginBottom: 20,
  },
  verticalLine: {
    width: '100%',
    height: 1,
    marginVertical: 16,
    backgroundColor: '#888',
  },
  p1: {
    color: '#222',
    fontSize: 16,
    fontFamily: 'Roboto',
    marginTop: 10,
  },
  p2: {
    color: '#555',
  },
  b1: {
    alignItems: 'center',
  },
  bt1: {
    backgroundColor: '#0090FF',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 50,
    textAlign: 'center',
    width: '50%',
  },
});
