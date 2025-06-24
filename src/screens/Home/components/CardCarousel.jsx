import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { parseSize, parseSizeHeight, Sizes } from '../../../theme';

const CardCarousel = ({ title, description, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <ImageBackground
        source={require('../../../assets/images/background-gradient.png')}
        style={styles.overlay}
        resizeMode="cover"
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </ImageBackground>
    </View>
  );
};

export default CardCarousel;

const styles = StyleSheet.create({
  container: {
    height: parseSizeHeight(173),
    borderRadius: Sizes.radius,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    padding: parseSize(16),
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: Sizes.text_subtitle2,
    fontWeight: '600',
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
  },
  description: {
    color: 'white',
    fontSize: Sizes.text_tagline2,
    fontWeight: '500',
    lineHeight: parseSizeHeight(18),
    letterSpacing: 0.15,
  },
});
