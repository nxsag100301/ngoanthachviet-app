import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MyButton } from '../../../conponents';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../../theme';

const BottomSheet = () => {
  return (
    <View style={styles.bottomSheetContainer}>
      <View style={styles.divider} />
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Giá bán</Text>
        <Text style={styles.price}>123.333.333 VND</Text>
      </View>
      <View style={styles.buttonContainer}>
        <MyButton
          variant="outline"
          label="Đấu giá"
          labelColor={Colors.primary_600}
          style={styles.button}
        />
        <MyButton
          label="Mua ngay"
          labelColor="white"
          backgroundColor={Colors.primary_600}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: parseSizeHeight(12),
    paddingHorizontal: parseSizeWidth(16),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#FFFFFF',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  divider: {
    width: parseSizeWidth(33),
    height: parseSizeHeight(4),
    borderRadius: 99,
    backgroundColor: '#ACACB0',
    marginHorizontal: 'auto',
    marginTop: parseSizeHeight(12),
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceTitle: {
    color: Colors.black_500,
    fontWeight: 400,
    fontSize: Sizes.text_subtitle2,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
  },
  price: {
    color: Colors.black_900,
    fontWeight: 600,
    fontSize: Sizes.text_h6,
    lineHeight: parseSizeHeight(26),
    letterSpacing: 0.15,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: parseSizeHeight(8),
  },
  button: {
    width: '48%',
    height: parseSizeHeight(46),
  },
});
