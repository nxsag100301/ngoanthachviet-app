import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../../theme';

const AnotherProductHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerTitle}>
      <Text style={styles.title}>Sản phẩm khác</Text>
      <TouchableOpacity
        style={styles.moreContainer}
        onPress={() => navigation.navigate('products')}
      >
        <Text style={styles.more}>Xem thêm</Text>
        <Image source={require('../../../assets/icons/arrow-right2.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default AnotherProductHeader;

const styles = StyleSheet.create({
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: parseSizeHeight(16),
    paddingBottom: parseSizeHeight(8),
    paddingHorizontal: parseSizeWidth(16),
  },
  title: {
    color: Colors.black_900,
    fontWeight: 600,
    fontSize: Sizes.text_subtitle1,
    lineHeight: parseSizeHeight(24),
    letterSpacing: 0.15,
  },
  moreContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: parseSizeWidth(6),
  },
  more: {
    color: Colors.primary_600,
  },
});
