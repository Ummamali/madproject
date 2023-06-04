import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const GradientButton = ({ onPress, title }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <LinearGradient colors={['#F4D03F', '#16A085']} style={styles.gradient}>
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
      borderRadius: 25,
      overflow: 'hidden',
    },
    gradient: {
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 25,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});
    
export default GradientButton;