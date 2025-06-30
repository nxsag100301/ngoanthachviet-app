import { Text, View, StyleSheet } from 'react-native';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../../theme';
import { MyAccordion } from '../../../conponents';

const DescriptionLine = ({ title, content }) => {
  return (
    <Text style={styles.contentDescription}>
      <Text style={styles.titleDescription}>{title}: </Text>
      {content}
    </Text>
  );
};

const HistoryDescription = ({ year, content }) => {
  return (
    <View style={styles.historyDescriptionContainer}>
      <Text style={styles.labelYearHistory}>{year}</Text>
      <View style={styles.historyContentContainer}>
        <View style={styles.circleIcon} />
        <Text style={styles.labelContent}>{content}</Text>
      </View>
    </View>
  );
};

const ProductDescription = () => {
  return (
    <View style={styles.container}>
      <MyAccordion title="Thông tin sản phẩm đấu giá" defaultOpen>
        <DescriptionLine title="Tên sản phẩm" content="Đá cảnh" />
        <DescriptionLine title="Mã sản phẩm" content="ĐCSSK032" />
        <DescriptionLine title="Giá khởi điểm" content="3.000.000 VND" />
        <DescriptionLine title="Bước giá" content="500.000 VND" />
        <DescriptionLine
          title="Mô tả"
          content="Là một khối đá tự nhiên 100%, từ dòng đá Canxit Sông Mã, Sơn La. Nó có
          hình dáng của một dãy núi hùng vĩ. Trên trên núi có cáo hố như những
          chiếc hồ trên núi. dọc theo sườn núi, có các vân đá màu trắng tựa như
          nước của những dòng suối đang chảy xuống thung lũng bên dưới. Nhìn
          tổng thể thì vên đá như một khung cảnh thu nhỏ của những ngọn núi cao
          thấp trùng điệp, có hồ, có suối và thung lũng."
        />
        <DescriptionLine
          title="Thông số"
          content="Ngang 16cm, Cao 21cm, Sâu 7cm"
        />
        <DescriptionLine title="Xuất xứ" content="Việt Nam" />
        <Text style={styles.titleDescription}>Lịch sử</Text>
        <View>
          <HistoryDescription year="2021" content="Được chuyển giao" />
          <HistoryDescription year="2020" content="Được khai quật bởi" />
        </View>
      </MyAccordion>
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: parseSizeWidth(16),
  },
  titleDescription: {
    fontSize: Sizes.text_subtitle1,
    fontWeight: 600,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
    color: Colors.black_900,
  },
  contentDescription: {
    fontSize: Sizes.text_subtitle1,
    fontWeight: 400,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
    textAlign: 'justify',
    color: Colors.black_400,
  },
  historyDescriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: parseSizeWidth(12),
  },
  historyContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: parseSizeWidth(8),
  },
  circleIcon: {
    width: parseSizeWidth(10),
    height: parseSizeHeight(10),
    borderRadius: 50,
    backgroundColor: Colors.primary_600,
  },
  labelYearHistory: {
    fontSize: Sizes.text_tagline1,
    fontWeight: 400,
    lineHeight: parseSizeHeight(20),
    letterSpacing: 0.15,
    color: Colors.black_400,
  },
  labelContent: {
    fontSize: Sizes.text_subtitle2,
    fontWeight: 400,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
    textAlign: 'justify',
    color: Colors.black_400,
  },
});
