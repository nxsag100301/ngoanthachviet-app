import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  FontStyles,
  parseSize,
  parseSizeHeight,
  parseSizeWidth,
  Sizes,
} from '../../theme';

const MyButton = ({
  variant,
  backgroundColor,
  label,
  labelColor = 'black',
  startIcon,
  disabled = false,
  style,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        variant === 'outline'
          ? [styles.containerOutline, { borderColor: labelColor }]
          : [styles.containerDefault, { backgroundColor }],
        disabled && styles.disabled,
        style,
      ]}
    >
      {startIcon && <Image source={startIcon} style={styles.startIcon} />}
      <Text
        style={[
          styles.label,
          {
            color: labelColor,
          },
          labelStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  containerDefault: {
    borderRadius: Sizes.radius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: parseSizeWidth(6),
    paddingHorizontal: parseSizeWidth(12),
    paddingVertical: parseSizeHeight(6),
  },
  containerOutline: {
    borderRadius: Sizes.radius,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    gap: parseSizeWidth(6),
    paddingHorizontal: parseSizeWidth(12),
    paddingVertical: parseSizeHeight(8),
  },
  label: {
    fontFamily: FontStyles.InterMedium,
    fontSize: Sizes.text_subtitle2,
    lineHeight: parseSize(22),
    letterSpacing: 0.15,
    fontWeight: 500,
  },
  startIcon: {
    width: parseSizeWidth(24),
    height: parseSizeHeight(24),
  },
  disabled: {
    opacity: 0.5,
  },
});
