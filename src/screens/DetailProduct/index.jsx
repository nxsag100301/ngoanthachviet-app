import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../theme';
import CustomHeader from '../../conponents/CustomHeader/CustomHeader';
import { IdentifyStatus, ProductCard } from '../../conponents';
import ImageGallery from './conponents/ImageGallery';
import BottomSheet from './conponents/BottomSheet';
import ProductDescription from './conponents/ProductDescription';

const Index = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { productId } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topContentContainer}>
        <CustomHeader screenTitle="Chi tiết" />
      </View>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={() => <ProductCard style={styles.productCard} />}
        numColumns={2}
        columnWrapperStyle={styles.renderContent}
        contentContainerStyle={styles.flatListContainer}
        ListHeaderComponent={
          <View style={styles.listHeaderContainer}>
            <ImageGallery />
            <IdentifyStatus containerStyle={styles.identiftStatus} />
            <Text style={styles.productName}>Đá cảnh thác chảy</Text>
            <Text style={styles.price}>123.333.333 VND</Text>
            <ProductDescription />
            <View style={styles.headerTitle}>
              <Text style={styles.title}>Sản phẩm khác</Text>
              <TouchableOpacity
                style={styles.moreContainer}
                onPress={() => navigation.navigate('products')}
              >
                <Text style={styles.more}>Xem thêm</Text>
                <Image
                  source={require('../../assets/icons/arrow-right2.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        }
      />
      <BottomSheet />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContentContainer: {
    paddingHorizontal: parseSizeWidth(16),
  },
  listHeaderContainer: {
    paddingHorizontal: parseSizeWidth(16),
    paddingTop: parseSizeHeight(8),
  },
  flatListContainer: {
    paddingBottom: parseSizeHeight(124),
  },
  identiftStatus: {
    width: parseSizeWidth(291),
    marginVertical: parseSizeHeight(16),
  },
  productName: {
    fontSize: Sizes.text_h5,
    fontWeight: 600,
    lineHeight: parseSizeHeight(28),
    letterSpacing: 0.15,
    color: 'black',
  },
  price: {
    fontSize: Sizes.text_subtitle1,
    fontWeight: 500,
    lineHeight: parseSizeHeight(24),
    letterSpacing: 0.15,
    color: Colors.primary_700,
  },
  productCard: {
    width: '48%',
  },
  renderContent: {
    display: 'flex',
    paddingVertical: parseSizeHeight(8),
    paddingHorizontal: parseSizeWidth(16),
    justifyContent: 'space-between',
  },
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
