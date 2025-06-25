import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../theme';
import MyButton from '../Button/MyButton';
import AuctionTime from '../AuctionTime/AuctionTime';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ productInfo, style, auctionTime }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => navigation.navigate('detailProduct', { productId: 1 })}
    >
      <Image
        source={require('../../assets/icons/shield-checked.png')}
        style={styles.shieldChecked}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="cover"
      />
      <Image
        source={require('../../assets/images/rock-card.png')}
        style={styles.mainImage}
        resizeMode="cover"
      />
      <View style={styles.bottomContent}>
        <Text style={styles.productName}>Đá cảnh 7B186</Text>
        {auctionTime ? (
          <View>
            <View style={styles.sessionContainer}>
              <Text style={styles.sessionTitle}>Mở phiên:</Text>
              <Text style={styles.sessionTime}>12:00 | 21/05/2025</Text>
            </View>
            <AuctionTime />
          </View>
        ) : (
          <Text style={styles.price}>133.333.333 VND</Text>
        )}
        <MyButton
          label="Mua ngay"
          labelColor="white"
          backgroundColor={Colors.primary_600}
          style={styles.button}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: Sizes.radius,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: Sizes.radius,
    elevation: 5,
  },
  shieldChecked: {
    position: 'absolute',
    width: parseSizeWidth(32),
    height: parseSizeHeight(32),
    top: 0,
    right: 0,
    zIndex: 1,
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: parseSizeWidth(44),
    height: parseSizeHeight(24),
    zIndex: 1,
  },
  mainImage: {
    height: parseSizeHeight(145),
    width: '100%',
    marginBottom: parseSizeHeight(12),
    borderTopLeftRadius: Sizes.radius,
    borderTopRightRadius: Sizes.radius,
  },
  bottomContent: {
    paddingBottom: parseSizeHeight(12),
    paddingHorizontal: parseSizeWidth(6),
  },
  productName: {
    marginBottom: parseSizeHeight(4),
    color: Colors.black_900,
    fontWeight: 600,
    fontSize: Sizes.text_subtitle1,
    lineHeight: parseSizeHeight(24),
    letterSpacing: 0.15,
  },
  price: {
    marginBottom: parseSizeHeight(12),
    color: Colors.black_400,
    fontWeight: 400,
    fontSize: Sizes.text_subtitle2,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
  },
  button: {
    width: parseSizeWidth(91),
    height: parseSizeHeight(34),
  },
  sessionContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
  },
  sessionTitle: {
    fontSize: Sizes.text_tagline2,
    letterSpacing: 0.15,
    color: Colors.black_400,
  },
  sessionTime: {
    fontSize: Sizes.text_tagline2,
    letterSpacing: 0.15,
    color: Colors.black_500,
    fontWeight: 500,
  },
});
