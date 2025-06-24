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
import { memo, useCallback, useRef, useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { interpolate } from 'react-native-reanimated';

const IntroduceCarousel = ({ data }) => {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const progress = useSharedValue(1);

  const animationStyle = useCallback(value => {
    'worklet';

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const rotateZ = `${interpolate(value, [-1, 0, 1], [-4, 0, 4])}deg`;
    const translateX = interpolate(
      value,
      [-1, 0, 1],
      [-Width * 0.7, 0, Width * 0.7],
    );

    return {
      transform: [{ rotateZ }, { translateX }],
      zIndex,
    };
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.mainContent} key={index}>
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
          onProgressChange={progress}
          onSnapToItem={index => {
            setCurrentIndex(index);
          }}
          renderItem={renderItem}
          customAnimation={animationStyle}
        />

        <View style={styles.paginationContainer}>
          {data.map((_, index) => {
            const isActive = currentIndex === index;
            return (
              <View
                key={index}
                style={[styles.dotStyle, isActive && styles.activeDotStyle]}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default memo(IntroduceCarousel);

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
    marginTop: parseSizeHeight(10),
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
