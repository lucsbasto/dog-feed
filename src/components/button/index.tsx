import { colors } from '@/theme/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const OutlinedButton = ({ title, onPress }: any) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.outlined ]}
      onPress={onPress}
    >
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};
export const ElevatedButton = ({ title, onPress }: any) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.elevated ]}
      onPress={onPress}
    >
      <Text style={[styles.text, {color:'white'}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 150,
    height: 50,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  outlined: {
    backgroundColor: 'transparent',
  },
  elevated: {
    backgroundColor: colors.stone[800],
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});



const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

