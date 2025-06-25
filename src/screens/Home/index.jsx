import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Colors,
  parseSize,
  parseSizeHeight,
  parseSizeWidth,
  Sizes,
} from '../../theme';
import HeaderHome from './Section/HeaderHome';
import ProductSection from './Section/ProductSection';
import { ProductCard } from '../../conponents';
import React from 'react';
import IntroduceCarousel from './components/IntroduceCarousel';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      title: 'Ngoạn Thạch Việt',
      description:
        'Hội tụ những người đam mê nghệ thuật đá Suiseki và sưu tầm đá cảnh tại Việt Nam.',
      image: require('../../assets/images/program.jpg'),
    },
    {
      id: 2,
      title: 'Nghệ thuật đá Suiseki',
      description:
        'Suiseki nghệ thuật chiêm ngưỡng đá tự nhiên, kết hợp hài hòa giữa hình dáng và ý nghĩa.',
      image: require('../../assets/images/rock.png'),
    },
    {
      id: 3,
      title: 'Vẻ đẹp tự nhiên',
      description:
        'Đá Suiseki tác phẩm nghệ thuật từ thiên nhiên, mang trong mình vẻ đẹp nguyên bản',
      image: require('../../assets/images/rock3.jpg'),
    },
  ];
  return (
    <FlatList
      data={[1, 2, 3, 4]}
      renderItem={() => (
        <ProductCard auctionTime="12:00" style={styles.productCard} />
      )}
      keyExtractor={item => item.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <HeaderHome />
          <View style={styles.headerTitle}>
            <Text style={styles.title}>Giới thiệu</Text>
            <TouchableOpacity
              style={styles.moreContainer}
              onPress={() => navigation.navigate('introduce')}
            >
              <Text style={styles.more}>Xem thêm</Text>
              <Image source={require('../../assets/icons/arrow-right2.png')} />
            </TouchableOpacity>
          </View>
          <IntroduceCarousel data={data} />
          <ProductSection />
          <Text style={styles.auctionTitle}>Đấu giá</Text>
        </>
      }
      ListFooterComponent={
        <TouchableOpacity style={styles.moreContainer}>
          <Text style={styles.more}>Xem thêm</Text>
          <Image source={require('../../assets/icons/arrow-right2.png')} />
        </TouchableOpacity>
      }
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.renderContent}
    />
  );
};

export default Index;

const styles = StyleSheet.create({
  contentContainer: {},
  renderContent: {
    display: 'flex',
    paddingHorizontal: parseSizeWidth(16),
    paddingVertical: parseSizeHeight(8),
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
  },
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: parseSize(16),
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
    justifyContent: 'flex-end',
    gap: parseSizeWidth(6),
    paddingHorizontal: parseSizeWidth(16),
  },
  more: {
    color: Colors.primary_600,
  },
  auctionTitle: {
    color: Colors.black_900,
    fontWeight: 600,
    fontSize: Sizes.text_subtitle1,
    lineHeight: parseSizeHeight(24),
    letterSpacing: 0.15,
    paddingHorizontal: parseSizeWidth(16),
    paddingTop: parseSizeHeight(12),
    paddingBottom: parseSizeHeight(4),
  },
});
