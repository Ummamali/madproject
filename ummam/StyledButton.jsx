import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function StyledButton({title, onPress, additionalStyle, titleFontSize=16, titleColor='#fff'}) {
  return (
    <TouchableOpacity
      title={title}
      onPress={onPress}
      color={'#0090FF'}
      style={{...styles.btn, ...additionalStyle}}>
      <Text style={{fontSize: titleFontSize, fontFamily: 'Roboto-Regular', color: titleColor}}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    color: 'white',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 6,
    shadowColor: '#000',
    elevation: 1.5
  },
});
