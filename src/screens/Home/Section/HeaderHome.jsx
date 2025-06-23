import { Image, StyleSheet, View } from 'react-native';
import { MyButton, MyTextInput } from '../../../conponents';
import { Colors, parseSizeHeight, parseSizeWidth } from '../../../theme';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.overlay} />
        <Image
          source={require('../../../assets/images/navbar-background.png')}
          style={styles.mountain}
        />
        <View style={styles.topContent}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="cover"
          />
          <MyButton
            label="Liên hệ ngay"
            labelColor={Colors.primary_900}
            backgroundColor={Colors.primary_50}
            startIcon={require('../../../assets/icons/phone.png')}
            style={styles.button}
          />
        </View>
        <View style={styles.inputParent}>
          <MyTextInput
            placeholder="Tìm kiếm"
            endIcon={require('../../../assets/icons/search.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  navBar: {
    height: parseSizeHeight(159),
    backgroundColor: Colors.primary_900,
    position: 'relative',
    paddingVertical: parseSizeHeight(24),
  },
  mountain: {
    position: 'absolute',
    bottom: 0,
  },
  topContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: parseSizeWidth(16),
    marginBottom: parseSizeHeight(16),
  },
  logo: {
    width: parseSizeWidth(110),
    height: parseSizeHeight(49),
    paddingLeft: parseSizeWidth(8),
  },
  inputParent: {
    paddingHorizontal: parseSizeWidth(16),
  },
  button: {
    height: parseSizeHeight(40),
  },
});
