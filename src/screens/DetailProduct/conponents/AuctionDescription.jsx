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

const AuctionDescription = () => {
  return (
    <View style={styles.container}>
      <MyAccordion title="Thông tin đấu giá" defaultOpen>
        <DescriptionLine title="Đấu giá viên" content="Nguyễn Văn A" />
        <DescriptionLine
          title="Địa chỉ"
          content="D2 Đường 5B Him Lam P. Tân Hưng, Quận 7, TP. Hồ Chí Minh"
        />
        <DescriptionLine
          title="Thời gian mở phiên"
          content="15:00 | 20/05/2024"
        />
        <DescriptionLine
          title="Thời gian đóng phiên"
          content="16:00 | 20/05/2024"
        />
        <DescriptionLine title="Bước giá" content="500.000 VND" />
        <DescriptionLine title="Số bước giá tối đa" content="Không giới hạn" />
        <DescriptionLine
          title="Phương thức đấu giá"
          content="Đấu giá lên và liên tục"
        />
      </MyAccordion>
    </View>
  );
};

export default AuctionDescription;

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
    fontWeight: 500,
    lineHeight: parseSizeHeight(20),
    letterSpacing: 0.15,
    color: Colors.black_400,
  },
  labelContent: {
    fontSize: Sizes.text_subtitle2,
    fontWeight: 500,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
    textAlign: 'justify',
    color: Colors.black_400,
  },
});
