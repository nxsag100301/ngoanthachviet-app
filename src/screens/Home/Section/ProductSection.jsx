import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { MyButton, ProductCard } from '../../../conponents';
import {
  Colors,
  parseSize,
  parseSizeHeight,
  parseSizeWidth,
  Sizes,
} from '../../../theme';
import { useNavigation } from '@react-navigation/native';

const ProductSection = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={styles.title}>Sản phẩm</Text>
        <TouchableOpacity
          style={styles.moreContainer}
          onPress={() => navigation.navigate('products')}
        >
          <Text style={styles.more}>Xem thêm</Text>
          <Image source={require('../../../assets/icons/arrow-right2.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={() => <ProductCard style={styles.card} />}
        keyExtractor={item => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.contentContainer}
      />
      <ImageBackground
        source={require('../../../assets/images/introduce-background.png')}
        style={styles.introduceProduct}
        resizeMode="cover"
      >
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Đá Cát Vân Long</Text>
          <Text style={styles.infoDescription}>
            Một tuyệt phẩm từ thiên nhiên, mang lớp vân uốn lượn như sóng chảy
            qua thời gian
          </Text>
          <MyButton
            label="Xem thông tin"
            labelColor="white"
            backgroundColor={Colors.primary_600}
            style={styles.infoButton}
            labelStyle={styles.textInfoButton}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProductSection;

const styles = StyleSheet.create({
  container: {},
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: parseSize(16),
    paddingTop: parseSizeHeight(16),
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
  contentContainer: {
    display: 'flex',
    gap: parseSizeWidth(16),
    padding: parseSize(16),
  },
  card: {
    width: parseSizeWidth(145),
  },
  introduceProduct: {
    height: parseSizeHeight(180),
    marginHorizontal: parseSize(16),
    borderRadius: parseSize(12),
    marginTop: parseSizeHeight(8),
  },
  infoContainer: {
    width: parseSizeWidth(200),
    paddingHorizontal: parseSizeWidth(16),
    paddingVertical: parseSizeHeight(24),
  },
  infoTitle: {
    fontSize: Sizes.text_subtitle1,
    lineHeight: parseSizeHeight(24),
    letterSpacing: 0.15,
    fontWeight: 600,
    color: 'white',
    marginBottom: parseSizeHeight(4),
  },
  infoDescription: {
    fontSize: Sizes.text_tagline2,
    lineHeight: parseSize(14),
    letterSpacing: 0.15,
    color: 'white',
    textAlign: 'justify',
    marginBottom: parseSizeHeight(12),
  },
  infoButton: {
    height: parseSizeHeight(32),
    width: parseSizeWidth(106),
  },
  textInfoButton: {
    fontSize: parseSize(12),
  },
});
