import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {
  Colors,
  parseSizeHeight,
  parseSizeWidth,
  Sizes,
  Width,
} from '../../../theme';
import CardCarousel from './CardCarousel';
import { useRef, useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';

const data = [
  {
    id: 1,
    title: 'Ngoạn Thạch Việt',
    description:
      'Hội tụ những người đam mê nghệ thuật đá Suiseki và sưu tầm đá cảnh tại Việt Nam.',
    image: require('../../../assets/images/program.jpg'),
  },
  {
    id: 2,
    title: 'Nghệ thuật đá Suiseki',
    description:
      'Suiseki nghệ thuật chiêm ngưỡng đá tự nhiên, kết hợp hài hòa giữa hình dáng và ý nghĩa.',
    image: require('../../../assets/images/rock.png'),
  },
  {
    id: 3,
    title: 'Vẻ đẹp tự nhiên',
    description:
      'Đá Suiseki tác phẩm nghệ thuật từ thiên nhiên, mang trong mình vẻ đẹp nguyên bản',
    image: require('../../../assets/images/rock3.jpg'),
  },
];

const IntroduceCarousel = () => {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const progress = useSharedValue(1);

  const onPressPagination = index => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  const renderItem = ({ item, index }) => {
    let transformStyle = {};
    // if (index === progress.value - 1 || index === progress.value + 2) {
    //   transformStyle = {
    //     transform: [{ rotateZ: '-4deg' }],
    //     marginTop: 10,
    //   };
    // } else if (index === progress.value + 1 || index === progress.value - 2) {
    //   transformStyle = {
    //     transform: [{ rotateZ: '4deg' }],
    //     marginTop: 10,
    //   };
    // }

    return (
      <View style={[styles.mainContent, transformStyle]} key={index}>
        <CardCarousel
          title={item.title}
          description={item.description}
          image={item.image}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={styles.title}>Giới thiệu</Text>
        <TouchableOpacity style={styles.moreContainer}>
          <Text style={styles.more}>Xem thêm</Text>
          <Image source={require('../../../assets/icons/arrow-right2.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          ref={ref}
          width={Width}
          style={styles.carousel}
          height={parseSizeHeight(190)}
          data={data}
          pagingEnabled={true}
          snapEnabled={true}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 120,
            parallaxAdjacentItemScale: 1,
          }}
          onProgressChange={progress}
          onSnapToItem={index => {
            setCurrentIndex(index);
          }}
          renderItem={renderItem}
        />

        <View style={styles.paginationContainer}>
          {data.map((_, index) => {
            const isActive = currentIndex === index;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => onPressPagination(index)}
              >
                <View
                  style={[styles.dotStyle, isActive && styles.activeDotStyle]}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default IntroduceCarousel;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: parseSizeWidth(16),
  },
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: parseSizeHeight(16),
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
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {},
  mainContent: {
    justifyContent: 'center',
    width: parseSizeWidth(248),
    marginHorizontal: 'auto',
  },
  paginationContainer: {
    gap: parseSizeWidth(6),
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    backgroundColor: Colors.black_400,
    width: parseSizeWidth(6),
    height: parseSizeHeight(6),
    borderRadius: 50,
  },
  activeDotStyle: {
    backgroundColor: Colors.primary_600,
    width: parseSizeWidth(14),
    height: parseSizeHeight(6),
    borderRadius: 50,
  },
});
