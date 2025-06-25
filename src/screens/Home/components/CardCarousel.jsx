import {
  Image,
  ImageBackground,
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
} from '../../../theme';

const CardCarousel = ({ title, description, image, showButton = false }) => {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <ImageBackground
        source={require('../../../assets/images/background-gradient.png')}
        style={styles.overlay}
        resizeMode="cover"
      >
        <View style={showButton && styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        </View>
        {showButton && (
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../../assets/icons/arrow-right.png')}
              style={styles.arrowIcon}
              tintColor={Colors.primary_600}
            />
          </TouchableOpacity>
        )}
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
  content: {
    width: '80%',
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
  button: {
    height: parseSizeHeight(36),
    width: parseSizeWidth(36),
    borderRadius: Sizes.radius,
    opacity: 0.9,
    backgroundColor: Colors.primary_50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: parseSize(16),
    right: parseSize(16),
  },
  arrowIcon: {
    height: parseSizeHeight(16),
    width: parseSizeWidth(16),
  },
});
