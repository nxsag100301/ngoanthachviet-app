import { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { parseSizeHeight, parseSizeWidth, Sizes } from '../../../theme';

const images = [
  { id: 1, uri: require('../../../assets/images/rock3.jpg') },
  { id: 2, uri: require('../../../assets/images/rock2.png') },
  { id: 4, uri: require('../../../assets/images/program.jpg') },
  { id: 5, uri: require('../../../assets/images/rock-card.png') },
  { id: 6, uri: require('../../../assets/images/rock.png') },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <View style={styles.container}>
      <View style={styles.mainImageContainer}>
        <Image
          source={require('../../../assets/icons/shield-checked.png')}
          style={styles.shieldChecked}
        />
        <Image
          source={selectedImage.uri}
          style={styles.mainImage}
          resizeMode="cover"
        />
      </View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedImage(item)}
            style={styles.childImageContainer}
          >
            <Image source={item.uri} style={styles.childImage} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.renderItemStyle}
      />
    </View>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  container: {},
  mainImageContainer: {
    position: 'relative',
    borderRadius: Sizes.radius,
    height: parseSizeHeight(260),
    width: '100%',
    marginBottom: parseSizeHeight(8),
  },
  shieldChecked: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: parseSizeHeight(41),
    width: parseSizeWidth(41),
    zIndex: 1,
  },
  mainImage: {
    height: '100%',
    width: '100%',
    borderRadius: Sizes.radius,
  },
  childImageContainer: {
    width: parseSizeWidth(90),
    height: parseSizeHeight(80),
    borderRadius: 4,
  },
  childImage: {
    height: '100%',
    width: '100%',
    borderRadius: 4,
  },
  renderItemStyle: {
    gap: parseSizeWidth(8),
  },
});
