import { StyleSheet, Text, View } from 'react-native';
import { MyButton, MyTextInput } from '../../conponents';
import { Colors, Sizes } from '../../theme';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Home Screen</Text>
      <MyTextInput
        placeholder="Tìm kiếm"
        endIcon={require('../../assets/icons/search.png')}
      />
      <MyButton
        label="Liên hệ ngay"
        labelColor={Colors.primary_900}
        backgroundColor={Colors.primary_50}
        startIcon={require('../../assets/icons/phone.png')}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Sizes.paddingWidth,
  },
  test: {
    marginBottom: 20,
  },
});
