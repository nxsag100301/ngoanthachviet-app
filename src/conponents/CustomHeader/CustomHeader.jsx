import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../theme';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ screenTitle }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../assets/icons/back.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.screenTitle}>
        {screenTitle ? screenTitle : 'No header'}
      </Text>
      <View style={styles.fakeView} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: parseSizeHeight(8),
  },
  backContainer: {
    height: parseSizeHeight(36),
    width: parseSizeWidth(36),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray_25,
    borderRadius: 50,
  },
  icon: {
    height: parseSizeHeight(20),
    width: parseSizeWidth(20),
  },
  screenTitle: {
    color: Colors.black_900,
    fontWeight: 600,
    fontSize: Sizes.text_subtitle1,
    lineHeight: parseSizeHeight(24),
    letterSpacing: 0.15,
  },
  fakeView: {
    height: parseSizeHeight(36),
    width: parseSizeWidth(36),
  },
});
