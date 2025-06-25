import { memo, useCallback, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { interpolate, useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { Colors, parseSizeHeight, parseSizeWidth, Width } from '../../../theme';
import CardCarousel from './CardCarousel';

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
      <View style={styles.carouselContainer}>
        <Carousel
          ref={ref}
          width={Width}
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
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
