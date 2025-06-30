import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../../theme';
import { useState } from 'react';

const BidInput = ({ currentPrice, stepPrice }) => {
  const [bidPrice, setBidPrice] = useState(currentPrice);

  const handleMinus = () => {
    if (bidPrice === currentPrice) return;
    setBidPrice(prev => prev - stepPrice);
  };

  const handlePlus = () => {
    setBidPrice(prev => prev + stepPrice);
  };

  const handleChangeText = text => {
    const numeric = text.replace(/,/g, '').replace(/\D/g, '');
    if (numeric) {
      setBidPrice(Number(numeric));
    } else {
      setBidPrice(0);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMinus} style={styles.minusContainer}>
        <Image
          source={require('../../../assets/icons/minus.png')}
          style={styles.minusIcon}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={bidPrice.toLocaleString()}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity onPress={handlePlus} style={styles.plusContainer}>
        <Image
          source={require('../../../assets/icons/plus.png')}
          style={styles.plusIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BidInput;

const styles = StyleSheet.create({
  container: {
    maxWidth: parseSizeWidth(196),
    width: '100%',
    position: 'relative',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.gray_200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  minusContainer: {
    width: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusIcon: {
    width: parseSizeWidth(14),
    height: parseSizeHeight(3),
  },
  input: {
    width: '70%',
    color: Colors.black_400,
    fontSize: Sizes.text_subtitle2,
    fontWeight: 600,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
    textAlign: 'center',
  },
  plusContainer: {
    width: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    width: parseSizeWidth(14),
    height: parseSizeHeight(14),
  },
});
