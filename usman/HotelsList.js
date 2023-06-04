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
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const handleSearch = () => {
    // Perform search logic based on searchText
    console.log('Searching for:', searchText);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View>
          <Text style={styles.text}>Hotel</Text>
          <Text style={styles.text1}>Abidjan 200 Hotels</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="map-marker" size={22} color="#F27320" />
        </View>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'#888'}
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icon name="search" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.maincontianer}>
        <View style={styles.container3}>
          <Text style={styles.maintext}>Amenties</Text>
          <Icon name="chevron-down" size={18} color="#000000" />
        </View>
        <View style={styles.container3}>
          <Text style={styles.maintext}>Filter by</Text>
          <Icon name="chevron-down" size={18} color="#000000" />
        </View>
        <View style={styles.container3}>
          <Text style={styles.maintext}>Sort by</Text>
          <Icon name="chevron-down" size={18} color="#000000" />
        </View>
      </View>
      <View style={styles.mcontainer}>
        <View style={styles.picontainer}>
          <Image style={styles.pic2} source={require('./Assests/pic2.jpg')} />
        </View>
        <View style={styles.dcontainer}>
          <Text style={styles.t2}>Headen Golf</Text>
          <View style={styles.scontainer}>
            <View style={styles.iconContianer}>
              <Icon name="star-half-o" size={18} color="#F27320" />
              <Text>3.0</Text>
            </View>

            <Text style={styles.review}>Onomo</Text>
          </View>
          <Text style={styles.des}>
            St in islamabad to set nature and beauty
          </Text>
          <View style={styles.bcontainer}>
            <Text style={styles.priceText}>180$</Text>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => navigation.navigate('AccomodationsForm')}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.verticalLine} />

      <View style={styles.mcontainer}>
        <View style={styles.picontainer}>
          <Image style={styles.pic2} source={require('./Assests/pic3.jpg')} />
        </View>
        <View style={styles.dcontainer}>
          <Text style={styles.t2}>Headen Golf</Text>
          <View style={styles.scontainer}>
            <View style={styles.iconContianer}>
              <Icon name="star-half-o" size={18} color="#F27320" />
              <Text>3.0</Text>
            </View>

            <Text style={styles.review}>200 reviews</Text>
          </View>
          <Text style={styles.des}>
            St in islamabad to set nature and beauty
          </Text>
          <View style={styles.bcontainer}>
            <Text style={styles.priceText}>127$</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.verticalLine} />

      <View style={styles.mcontainer}>
        <View style={styles.picontainer}>
          <Image style={styles.pic2} source={require('./Assests/pic4.jpg')} />
        </View>
        <View style={styles.dcontainer}>
          <Text style={styles.t2}>Headen Onomo</Text>
          <View style={styles.scontainer}>
            <View style={styles.iconContianer}>
              <Icon name="star-half-o" size={18} color="#F27320" />
              <Text>3.0</Text>
            </View>

            <Text style={styles.review}>20 reviews</Text>
          </View>
          <Text style={styles.des}>
            with full of beauty and nature all around
          </Text>
          <View style={styles.bcontainer}>
            <Text style={styles.priceText}>200$</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.mcontainer}>
        <View style={styles.picontainer}>
          <Image style={styles.pic2} source={require('./Assests/pic5.jpg')} />
        </View>
        <View style={styles.dcontainer}>
          <Text style={styles.t2}>Sofitel</Text>
          <View style={styles.scontainer}>
            <View style={styles.iconContianer}>
              <Icon name="star-half-o" size={18} color="#F27320" />
              <Text>3.0</Text>
            </View>

            <Text style={styles.review}>150 reviews</Text>
          </View>
          <Text style={styles.des}>This understaded is 50km from both....</Text>
          <View style={styles.bcontainer}>
            <Text style={styles.priceText}>250$</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  des: {
    color: '#666',
    fontSize: 12,
  },
  container3: {
    flexDirection: 'row',
  },
  iconContianer: {
    flexDirection: 'row',
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  priceText: {
    marginRight: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#0090FF',
  },
  t2: {
    fontWeight: 'bold',
    color: '#0B0B0B',
    fontFamily: 'Roboto',
  },
  bookButton: {
    backgroundColor: '#0090FF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginLeft: 50,
    marginTop: 14,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  review: {
    marginLeft: 50,
  },
  mcontainer: {
    flexDirection: 'row',
    // justifyContent:'space-around',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginBottom: 4,
    borderRadius: 2,
  },
  picontainer: {
    marginLeft: 8,
  },
  dcontainer: {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginLeft: 30,
  },
  bcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  scontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  maintext: {
    marginRight: 4,
    color: '#666',
  },
  verticalLine: {
    width: '100%',
    height: 1,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#999',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#555',
  },
  maincontianer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#f2f2f2',
    marginBottom: 24,
  },
  searchButton: {
    padding: 10,
  },
  iconWrapper: {
    marginTop: 30,
    marginRight: 20,
  },
  text: {
    marginTop: 20,
    paddingLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 28,
    color: '#0B0B0B',
    fontWeight: 'bold',
    marginRight: 10,
  },
  text1: {
    fontSize: 14,
    marginTop: 0,
    paddingLeft: 10,
    color: '#0B0B0B',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  button: {
    width: 160,
    paddingLeft: 20,
  },
  all: {
    marginLeft: 'auto',
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
    marginTop: 15,
  },
  center: {
    alignItems: 'center',
  },
  pic2: {
    height: 80,
    width: 100,
    borderRadius: 10,
  },
});
