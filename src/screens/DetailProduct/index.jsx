import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../theme';
import CustomHeader from '../../conponents/CustomHeader/CustomHeader';
import { BottomSheet, IdentifyStatus, ProductCard } from '../../conponents';
import ImageGallery from './conponents/ImageGallery';
import ProductDescription from './conponents/ProductDescription';
import AnotherProductHeader from './conponents/AnotherProductHeader';
import AuctionDescription from './conponents/AuctionDescription';
import Divider from '../../conponents/Divider/Divider';
import DetailContentBottomSheet from './conponents/DetailContentBottomSheet';
import AuctionContentBottomSheet from './conponents/AuctionContentBottomSheet';
import AutionTime from './conponents/AutionTime';

const Index = ({ autionTime }) => {
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
        contentContainerStyle={
          autionTime
            ? styles.flatListContainerAuction
            : styles.flatListContainerDetail
        }
        ListHeaderComponent={
          <>
            <View style={styles.listHeaderContainer}>
              <ImageGallery />
              <IdentifyStatus containerStyle={styles.identiftStatus} />
              <Text style={styles.productName}>Đá cảnh thác chảy</Text>
              <Text style={styles.price}>123.333.333 VND</Text>
              <AutionTime />
            </View>
            <Divider />
            <ProductDescription />
            <Divider />
            <AuctionDescription />
            <Divider />
            <AnotherProductHeader />
          </>
        }
      />
      <BottomSheet>
        {autionTime ? (
          <AuctionContentBottomSheet />
        ) : (
          <DetailContentBottomSheet />
        )}
      </BottomSheet>
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
    paddingBottom: parseSizeHeight(16),
  },
  flatListContainerDetail: {
    paddingBottom: parseSizeHeight(124),
  },
  flatListContainerAuction: {
    paddingBottom: parseSizeHeight(224),
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
    paddingBottom: parseSizeHeight(16),
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
});
