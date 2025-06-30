import { StyleSheet, Text, View } from 'react-native';
import { MyButton } from '../../../conponents';
import { Colors, parseSizeHeight, Sizes } from '../../../theme';

const DetailContentBottomSheet = () => {
  return (
    <>
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
    </>
  );
};

export default DetailContentBottomSheet;

const styles = StyleSheet.create({
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
  },
  button: {
    width: '48%',
    height: parseSizeHeight(46),
  },
});
