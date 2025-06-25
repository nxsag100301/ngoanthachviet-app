import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../../theme';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    if (defaultOpen) setCollapsed(false);
  }, [defaultOpen]);

  const arrowUri = !collapsed
    ? require('../../../assets/icons/arrow-up.png')
    : require('../../../assets/icons/arrow-down.png');

  return (
    <View style={styles.accordion}>
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
          <Image
            source={arrowUri}
            style={styles.arrow}
            tintColor={Colors.gray_400}
          />
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={collapsed}>
        <View style={styles.content}>{children}</View>
      </Collapsible>
    </View>
  );
};

const ProductDescription = () => {
  return (
    <View>
      <AccordionItem title="Thông tin sản phẩm đấu giá" defaultOpen>
        <View style={styles.childContentContainer}>
          <Text style={styles.firstContent}>Tên sản phẩm:</Text>
          <Text style={styles.secondContent}>Đá cảnh</Text>
        </View>
        <View style={styles.childContentContainer}>
          <Text style={styles.firstContent}>Mã sản phẩm:</Text>
          <Text style={styles.secondContent}>ĐCSSK032</Text>
        </View>
        <View style={styles.childContentContainer}>
          <Text style={styles.firstContent}>Giá khởi điểm:</Text>
          <Text style={styles.secondContent}>3.000.000 VND</Text>
        </View>
        <View style={styles.childContentContainer}>
          <Text style={styles.firstContent}>Bước giá:</Text>
          <Text style={styles.secondContent}>500.000 VND</Text>
        </View>
        <Text style={styles.secondContent}>
          <Text style={styles.firstContent}>Mô tả: </Text>
          Là một khối đá tự nhiên 100%, từ dòng đá Canxit Sông Mã, Sơn La. Nó có
          hình dáng của một dãy núi hùng vĩ. Trên trên núi có cáo hố như những
          chiếc hồ trên núi. dọc theo sườn núi, có các vân đá màu trắng tựa như
          nước của những dòng suối đang chảy xuống thung lũng bên dưới. Nhìn
          tổng thể thì vên đá như một khung cảnh thu nhỏ của những ngọn núi cao
          thấp trùng điệp, có hồ, có suối và thung lũng.
        </Text>
        <View style={styles.childContentContainer}>
          <Text style={styles.firstContent}>Thông số:</Text>
          <Text style={styles.secondContent}>
            Ngang 16cm, Cao 21cm, Sâu 7cm
          </Text>
        </View>
        <View style={styles.childContentContainer}>
          <Text style={styles.firstContent}>Xuất xứ:</Text>
          <Text style={styles.secondContent}>Việt Nam</Text>
        </View>
      </AccordionItem>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  accordion: {
    marginTop: parseSizeHeight(8),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: parseSizeHeight(16),
  },
  headerText: {
    fontSize: Sizes.text_h6,
    fontWeight: 600,
    lineHeight: parseSizeHeight(26),
    letterSpacing: 0.15,
  },
  arrow: {
    height: parseSizeHeight(24),
    width: parseSizeWidth(24),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: parseSizeHeight(8),
  },
  childContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: parseSizeWidth(4),
  },
  firstContent: {
    fontSize: Sizes.text_subtitle1,
    fontWeight: 600,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
  },
  secondContent: {
    fontSize: Sizes.text_subtitle1,
    fontWeight: 400,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
    textAlign: 'justify',
  },
});
