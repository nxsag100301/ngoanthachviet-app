import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../../theme';

const AutionTime = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailTimeContainer}>
        <View style={styles.timeStartContainer}>
          <Text style={styles.timeLabel}>Thời gian bắt đầu</Text>
          <Text style={styles.timeDetail}>15:00 | 20/05/2025</Text>
        </View>
        <View style={styles.timeEndContainer}>
          <Text style={styles.timeLabel}>Thời gian kết thúc</Text>
          <Text style={styles.timeDetail}>15:00 | 20/05/2025</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.statusLabelContainer}>
          <Image
            source={require('../../../assets/icons/clock.png')}
            style={styles.clockIcon}
            tintColor={Colors.primary_800}
          />
          <Text style={styles.statusLabel}>Kết thúc trong</Text>
        </View>
        <View style={styles.statusTimeContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>01</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>15</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>29</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AutionTime;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: parseSizeHeight(16),
  },
  detailTimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeStartContainer: {},
  timeEndContainer: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    color: Colors.black_400,
    fontSize: Sizes.text_tagline1,
    lineHeight: parseSizeHeight(20),
    letterSpacing: 0.15,
    fontWeight: 400,
  },
  timeDetail: {
    color: Colors.black_500,
    fontSize: Sizes.text_subtitle2,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
    fontWeight: 600,
  },
  statusContainer: {
    height: parseSizeHeight(48),
    borderRadius: Sizes.radius,
    backgroundColor: Colors.primary_50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: parseSizeWidth(8),
  },
  statusLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: parseSizeWidth(8),
  },
  statusTimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: parseSizeWidth(12),
  },
  clockIcon: {
    width: parseSizeWidth(24),
    height: parseSizeHeight(24),
  },
  statusLabel: {
    color: Colors.primary_800,
    fontSize: Sizes.text_subtitle2,
    lineHeight: parseSizeHeight(22),
    letterSpacing: 0.15,
  },
  timeContainer: {
    width: parseSizeWidth(32),
    height: parseSizeHeight(32),
    backgroundColor: Colors.primary_800,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  time: {
    fontSize: Sizes.text_subtitle1,
    lineHeight: parseSizeHeight(24),
    letterSpacing: 0.15,
    fontWeight: 700,
    color: 'white',
  },
});
