import { StyleSheet, View } from 'react-native';
import { parseSizeHeight, parseSizeWidth } from '../../theme';

const BottomSheet = ({ children }) => {
  return (
    <View style={styles.bottomSheetContainer}>
      <View style={styles.divider} />
      {children}
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: parseSizeHeight(12),
    paddingHorizontal: parseSizeWidth(16),
    paddingBottom: parseSizeHeight(8),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#FFFFFF',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  divider: {
    width: parseSizeWidth(33),
    height: parseSizeHeight(4),
    borderRadius: 99,
    backgroundColor: '#ACACB0',
    marginHorizontal: 'auto',
    marginTop: parseSizeHeight(12),
    opacity: 0.5,
  },
});
