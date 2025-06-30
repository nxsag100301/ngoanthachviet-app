import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors, parseSizeHeight } from '../../theme';

const Divider = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: parseSizeHeight(4),
    backgroundColor: Colors.gray_100,
  },
});
