import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  topPadding,
  titleTextStyle,
  subtitleTextStyle,
  textInputStyle,
  heroScreenStyle,
} from './globalConfig';
import StyledButton from './StyledButton';
import TripsButton from './TripsButton';

import {Formik} from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  fromcity: Yup.string().required('This field is required...'),
  tocity: Yup.string().required('This field is required...'),
  seats: Yup.number('Invalid value...')
    .min(1, 'At least one seat is acceptable...')
    .required('This field is required...'),
});

const errorFieldBG = '#ffeeee';

export default function FlightSearch({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height">
      <TouchableWithoutFeedback
        style={{flex: 1, justifyContent: 'flex-end'}}
        onPress={Keyboard.dismiss}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TripsButton />
          <Image
            source={require('./images/napkins.png')}
            style={{
              width: 230,
              height: 140,
              alignSelf: 'center',
              marginBottom: 15,
              marginTop: 30,
            }}
          />
          <Text style={styles.titleText}>Flight Search</Text>
          <Text style={styles.subtitleText}>Search available flights</Text>
          <Formik
            initialValues={{fromcity: '', tocity: '', seats: ''}}
            validationSchema={formSchema}
            validateOnBlur={true}
            validateOnChange={false}
            onSubmit={values => {
              navigation.navigate('FlightSearchResult', values);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomColor: '#999',
                    borderBottomWidth: 1,
                    backgroundColor:
                      touched.fromcity && errors.fromcity
                        ? errorFieldBG
                        : '#fff',
                    marginTop: 40,
                  }}>
                  <Image
                    source={require('./images/locIcon.png')}
                    style={{
                      width: 20,
                      height: 20,
                      marginBottom: -8,
                    }}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="from address...."
                    placeholderTextColor={'#999999'}
                    placeholderStyle={{fontSize: 20}}
                    value={values.fromcity}
                    onChangeText={handleChange('fromcity')}
                    onBlur={handleBlur('fromcity')}
                  />
                </View>
                {touched.fromcity && errors.fromcity ? (
                  <Text style={styles.errorText}>{errors.fromcity}</Text>
                ) : null}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomColor: '#999',
                    borderBottomWidth: 1,
                    marginTop: 5,
                    backgroundColor:
                      touched.tocity && errors.tocity ? errorFieldBG : '#fff',
                  }}>
                  <Image
                    source={require('./images/locIcon.png')}
                    style={{
                      width: 20,
                      height: 20,
                      marginBottom: -8,
                    }}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="to address...."
                    placeholderTextColor={'#999999'}
                    value={values.tocity}
                    onChangeText={handleChange('tocity')}
                    onBlur={handleBlur('tocity')}
                  />
                </View>
                {touched.tocity && errors.tocity ? (
                  <Text style={styles.errorText}>{errors.tocity}</Text>
                ) : null}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomColor: '#999',
                    borderBottomWidth: 1,
                    marginTop: 5,
                    backgroundColor:
                      touched.seats && errors.seats ? errorFieldBG : '#fff',
                  }}>
                  <Image
                    source={require('./images/seatIcon.png')}
                    style={{
                      width: 20,
                      height: 20,
                      marginBottom: -8,
                    }}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="number of seats...."
                    placeholderTextColor={'#999999'}
                    value={values.seats}
                    onChangeText={handleChange('seats')}
                    onBlur={handleBlur('seats')}
                  />
                </View>
                {touched.seats && errors.seats ? (
                  <Text style={styles.errorText}>{errors.seats}</Text>
                ) : null}
                <StyledButton
                  title="Search"
                  additionalStyle={{backgroundColor: '#1B594E', marginTop: 30}}
                  onPress={handleSubmit}></StyledButton>
              </View>
            )}
          </Formik>

          <View style={{marginBottom: 10}} />
          <Text style={styles.ftr}>Unable to decide?</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.ftr}>Check out our</Text>
            <TouchableOpacity
              style={{marginLeft: 3}}
              onPress={() => navigation.navigate('PopularPackages')}>
              <Text style={{...styles.ftr, color: '#1B594E'}}>
                Popular Packages
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  titleText: {
    ...titleTextStyle,
    textAlign: 'center',
  },
  subtitleText: {
    ...subtitleTextStyle,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 12,
    color: '#FF3333',
    marginTop: 2,
    fontStyle: 'italic',
  },
  textInput: {...textInputStyle, flex: 1, marginLeft: 10, borderBottomWidth: 0},
  ftr: {
    fontFamily: 'Roboto-Regular',
    color: '#999',
    textAlign: 'center',
    fontSize: 12.5,
  },
});
