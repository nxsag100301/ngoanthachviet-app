import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../conponents/CustomHeader/CustomHeader';
import { parseSizeHeight, parseSizeWidth } from '../../theme';
import { ProductCard } from '../../conponents';

const Index = () => {
  const arr = Array.from({ length: 10 }, (_, i) => i);
  return (
    <View style={styles.container}>
      <CustomHeader screenTitle="Sản phẩm" />
      <FlatList
        data={arr}
        renderItem={() => <ProductCard style={styles.productCard} />}
        keyExtractor={item => item.toString()}
        numColumns={2}
        columnWrapperStyle={styles.wrapperStyle}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: parseSizeWidth(16),
  },
  flatListContainer: {
    marginTop: parseSizeHeight(8),
  },
  wrapperStyle: {
    justifyContent: 'space-between',
    paddingBottom: parseSizeHeight(16),
  },
  productCard: {
    width: '48%',
  },
});
