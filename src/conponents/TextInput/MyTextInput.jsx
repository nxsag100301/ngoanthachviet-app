import { Image, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import {
  Colors,
  parseSize,
  parseSizeHeight,
  parseSizeWidth,
  Sizes,
} from '../../theme';

const MyTextInput = ({ placeholder, endIcon }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray_400}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {endIcon && <Image source={endIcon} style={styles.endIcon} />}
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  input: {
    height: Sizes.input_Height,
    borderWidth: 1,
    borderColor: Colors.gray_200,
    borderRadius: parseSize(12),
    padding: parseSize(12),
    backgroundColor: 'white',
    color: 'black',
  },
  inputFocused: {
    borderColor: Colors.primary_600,
  },
  endIcon: {
    position: 'absolute',
    width: parseSizeWidth(16),
    height: parseSizeHeight(16),
    right: parseSizeWidth(12),
    top: parseSizeHeight(16),
  },
});
