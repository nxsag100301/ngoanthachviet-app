import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, parseSizeHeight, Sizes } from '../../../theme';
import { MyButton } from '../../../conponents';
import BidInput from './BidInput';

const ContentLine = ({ label, value }) => {
  return (
    <View style={styles.contentLineContainer}>
      <Text style={styles.labelContent}>{label}</Text>
      <Text style={styles.valueContent}>{value}</Text>
    </View>
  );
};

const AuctionContentBottomSheet = () => {
  return (
    <View style={styles.container}>
      <ContentLine label="Giá hiện tại" value="30.000.000.000 VND" />
      <ContentLine label="Bước giá" value="5.000.000 VND" />
      <View style={styles.contentLineContainer}>
        <Text style={styles.labelContent}>Đặt giá của bạn</Text>
        <BidInput currentPrice={30000000000} stepPrice={5000000} />
      </View>
      <MyButton
        label="Đấu giá"
        labelColor="white"
        backgroundColor={Colors.primary_600}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      />
    </View>
  );
};

export default AuctionContentBottomSheet;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: parseSizeHeight(12),
  },
  contentLineContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelContent: {
    color: Colors.black_400,
    fontWeight: 400,
    fontSize: Sizes.text_subtitle1,
    lineHeight: parseSizeHeight(24),
    letterSpacing: 0.15,
  },
  valueContent: {
    color: Colors.black_500,
    fontWeight: 600,
    fontSize: Sizes.text_subtitle1,
    lineHeight: parseSizeHeight(24),
    letterSpacing: 0.15,
  },
  button: {
    height: parseSizeHeight(48),
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 400,
    fontSize: Sizes.text_subtitle1,
    lineHeight: parseSizeHeight(24),
    letterSpacing: 0.15,
  },
});
