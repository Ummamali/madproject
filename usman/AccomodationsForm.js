import * as React from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import StyledButton from '../ummam/StyledButton';
import {useNavigation} from '@react-navigation/native';
const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];
const check_in_Date = [
  '7 june 2023',
  '8 june 2023',
  '9 june 2023',
  '10 june 2023',
  '11 june 2023',
];
const check_out_Date = [
  '12 june 2023',
  '13 june 2023',
  '14 june 2023',
  '15 june 2023',
  '16 june 2023',
];
const members = [
  '1 child 2 aduts 1 room',
  '2 child 4 aduts 1 room',
  '5 child 3 aduts 2 room',
  '0 child 2 aduts 1 room',
  '3 child 2 aduts 1 room',
];

export default function App() {
  const [selectedCity, setSelectedCity] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [isDatePickerVisible1, setDatePickerVisible1] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState('');
  const [ismemberPickerVisible, setmemberPickerVisible] = useState(false);
  const [selectmember, setSelectedmember] = useState('');

  const navigation = useNavigation();

  const handleCitySelect = city => {
    setSelectedCity(city);
    setIsDropdownVisible(false);
  };
  const handleToggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handledateSelect = dates => {
    setSelectedDate(dates);
    setDatePickerVisible(false);
  };

  const handleDateConfirm = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };
  const handledateSelect1 = dates1 => {
    setSelectedDate1(dates1);
    setDatePickerVisible1(false);
  };

  const handleDateConfirm1 = () => {
    setDatePickerVisible1(!isDatePickerVisible1);
  };
  const handlememberSelect = member => {
    setSelectedmember(member);
    setmemberPickerVisible(false);
  };

  const handlememberConfirm = () => {
    setmemberPickerVisible(!ismemberPickerVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Find Room </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      <View style={styles.iconcontainer}>
        <Text style={styles.icon2Text}>Where do you want </Text>
        <TouchableOpacity
          style={styles.icon1Wrapper}
          onPress={handleToggleDropdown}>
          <Icon name="chevron-down" size={18} color="#000000" />
        </TouchableOpacity>
        {/* function for drop down menu */}
        {selectedCity !== '' && (
          <Text style={styles.selectedCityText}>{selectedCity}</Text>
        )}
        {isDropdownVisible && (
          <View style={styles.dropdownContainer}>
            {cities.map((city, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handleCitySelect(city)}>
                <Text style={styles.t1}>{city}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.icon2container}>
        <Text style={styles.icon2Text}>Check in date and time</Text>
        <TouchableOpacity
          style={styles.icon1Wrapper}
          onPress={handleDateConfirm1}>
          <Icon name="chevron-down" size={18} color="#000000" />
        </TouchableOpacity>
        {selectedDate1 !== '' && (
          <Text style={styles.selectedCityText}>{selectedDate1}</Text>
        )}
        {isDatePickerVisible1 && (
          <View style={styles.dropdownContainer}>
            {check_in_Date.map((dates1, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handledateSelect1(dates1)}>
                <Text style={styles.t1}>{dates1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.icon2container}>
        <Text style={styles.icon2Text}>Check out date and time</Text>
        <TouchableOpacity
          style={styles.icon1Wrapper}
          onPress={handleDateConfirm}>
          <Icon name="chevron-down" size={18} color="#000000" />
        </TouchableOpacity>
        {selectedDate !== '' && (
          <Text style={styles.selectedCityText}>{selectedDate}</Text>
        )}
        {isDatePickerVisible && (
          <View style={styles.dropdownContainer}>
            {check_out_Date.map((dates, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handledateSelect(dates)}>
                <Text style={styles.t1}>{dates}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.icon2container}>
        <Text style={styles.icon2Text}>0 child 0 adults 0 room</Text>
        <TouchableOpacity
          style={styles.icon1Wrapper}
          onPress={handlememberConfirm}>
          <Icon name="chevron-down" size={18} color="#000000" />
        </TouchableOpacity>
        {selectmember !== '' && (
          <Text style={styles.selectedCityText}>{selectmember}</Text>
        )}
        {ismemberPickerVisible && (
          <View style={styles.dropdownContainer}>
            {members.map((memberss, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handlememberSelect(memberss)}>
                <Text style={styles.t1}>{memberss}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('HotelDetail')}>
          <Text style={styles.button2Text}>Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.picContainer}>
        <Text style={{color: '#666'}}>Best Places</Text>
        <Text style={styles.all}>View All</Text>
      </View>

      <View style={styles.pic1Container}>
        <View style={styles.pic2Container}>
          <Image style={styles.pic2} source={require('./Assests/pic2.jpg')} />

          <Text style={{color: '#666'}}>Best Places</Text>
        </View>
        <View style={styles.pic2Container}>
          <Image style={styles.pic2} source={require('./Assests/pic2.jpg')} />

          <Text style={{color: '#666'}}>Best Places</Text>
        </View>
        <View style={styles.pic2Container}>
          <Image style={styles.pic2} source={require('./Assests/pic2.jpg')} />

          <Text style={{color: '#666'}}>Best Places </Text>
        </View>
      </View>
      <View style={styles.vertical1Line} />
      <View style={styles.picContainer}>
        <Text style={{color: '#666'}}>Best Places</Text>
        <Text style={styles.all}>View All</Text>
      </View>

      <View style={styles.pic1Container}>
        <View style={styles.pic2Container}>
          <Image style={styles.pic2} source={require('./Assests/pic2.jpg')} />

          <Text style={{color: '#666'}}>Best Places</Text>
        </View>
        <View style={styles.pic2Container}>
          <Image style={styles.pic2} source={require('./Assests/pic2.jpg')} />

          <Text style={{color: '#666'}}>Best Places</Text>
        </View>
        <View style={styles.pic2Container}>
          <Image style={styles.pic2} source={require('./Assests/pic2.jpg')} />

          <Text style={{color: '#666'}}>Best Places </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#ecf0f1',
    position: 'relative',
  },
  text: {
    marginTop: 20,
    padding: 10,
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
    opacity: 0.8,
  },
  button: {
    maxWidth: 140,
    paddingLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    backgroundColor: '#0090FF',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  icon1Wrapper: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
  },
  icon1Wrapper: {
    marginLeft: 60,
  },
  selectedCityText: {
    marginLeft: 10,
    color: '#0090FF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 30,
    zIndex: 200,
    backgroundColor: '#555',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    width: '80%',
  },
  dropdownItem: {
    paddingVertical: 2,
    fontWeight: 'bold',
    color: 'green',
    fontSize: 10,
    fontFamily: 'Arial',
  },
  selectedDateText: {
    marginLeft: 10,
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#0090FF',
    width: '50%',
    alignContent: 'center',
    margin: 10,
  },
  button2Text: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 50,
    fontWeight: 'bold',
  },

  iconcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginBottom: 4,
    marginLeft: 20,
  },
  iconText: {
    marginLeft: 5,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  verticalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#666',
  },
  vertical1Line: {
    width: '100%',
    height: 1,
    backgroundColor: '#888',
    marginTop: 10,
  },

  icon2container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginBottom: 4,
    marginLeft: 20,
  },
  iconWrapper: {
    marginLeft: 'auto',
  },
  icon2Text: {
    marginLeft: 30,
    fontSize: 16,
    color: '#777',
  },
  picContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  pic1Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  all: {
    marginLeft: 'auto',
    color: '#666',
  },
  logo: {
    height: 100,
    width: 128,
    marginRight: 10,
  },
  pic2Container: {},
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
  },
  center: {
    alignItems: 'center',
  },
  pic2: {
    height: 80,
    width: 120,
    borderRadius: 10,
  },
});
