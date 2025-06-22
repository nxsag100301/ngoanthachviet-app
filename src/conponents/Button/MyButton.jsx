import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  FontStyles,
  parseSize,
  parseSizeHeight,
  parseSizeWidth,
  Sizes,
} from '../../theme';

const MyButton = ({ backgroundColor, label, labelColor, startIcon }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      {startIcon && <Image source={startIcon} style={styles.startIcon} />}
      <Text style={[label, { color: labelColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    height: parseSizeHeight(40),
    borderRadius: Sizes.radius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: parseSizeWidth(6),
    paddingHorizontal: parseSizeWidth(12),
    paddingVertical: parseSizeHeight(8),
  },
  label: {
    color: 'black',
    fontFamily: FontStyles.InterRegular,
    fontSize: Sizes.text_subtitle2,
    lineHeight: parseSize(22),
    letterSpacing: 0.15,
    fontWeight: 500,
  },
  startIcon: {
    width: parseSizeWidth(24),
    height: parseSizeHeight(24),
  },
});
