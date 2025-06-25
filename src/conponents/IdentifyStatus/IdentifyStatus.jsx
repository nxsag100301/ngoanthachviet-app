import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Colors,
  parseSize,
  parseSizeHeight,
  parseSizeWidth,
  Sizes,
} from '../../theme';

const Index = ({ containerStyle, textStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={require('../../assets/icons/tiny-shield-checked.png')}
        style={styles.shieldChecked}
        resizeMode="contain"
      />
      <Text style={[styles.text, textStyle]}>
        Đã được định danh bởi Ngoạn Thạch Việt
      </Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    height: parseSizeHeight(44),
    padding: parseSize(12),
    borderRadius: parseSize(4),
    backgroundColor: Colors.green_bg,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: parseSizeWidth(8),
  },
  shieldChecked: {
    height: parseSizeHeight(16),
    width: parseSizeWidth(16),
  },
  text: {
    fontSize: Sizes.text_tagline1,
    lineHeight: parseSizeHeight(20),
    letterSpacing: 0.15,
    color: Colors.green,
  },
});
