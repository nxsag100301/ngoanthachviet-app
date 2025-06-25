import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomHeader from '../../conponents/CustomHeader/CustomHeader';
import { parseSizeHeight, parseSizeWidth } from '../../theme';
import CardCarousel from '../Home/components/CardCarousel';

const Index = () => {
  const data = [
    {
      id: 1,
      title: 'Nghệ thuật đá Suiseki',
      description:
        'Suiseki nghệ thuật chiêm ngưỡng đá tự nhiên, kết hợp hài hòa giữa hình dáng và ý nghĩa.',
      image: require('../../assets/images/rock.png'),
    },
    {
      id: 2,
      title: 'Ngoạn Thạch Việt',
      description:
        'Hội tụ những người đam mê nghệ thuật đá Suiseki và sưu tầm đá cảnh tại Việt Nam.',
      image: require('../../assets/images/program.jpg'),
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
    <View style={styles.container}>
      <CustomHeader screenTitle="Giới thiệu" />
      <View style={styles.divider} />
      {data &&
        data.length > 0 &&
        data.map(item => (
          <View key={item.id} style={styles.cardContainer}>
            <CardCarousel
              title={item.title}
              description={item.description}
              image={item.image}
              showButton
            />
          </View>
        ))}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: parseSizeWidth(16),
  },
  divider: {
    paddingTop: parseSizeHeight(8),
  },
  cardContainer: {
    marginBottom: parseSizeHeight(16),
  },
});
