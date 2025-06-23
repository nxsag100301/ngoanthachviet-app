import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Colors,
  FontStyles,
  parseSize,
  parseSizeHeight,
  Sizes,
} from '../../theme';

const Index = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/images/background/welcome-background.png')}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.introduceTitle}>Ngoạn Thạch Việt giới thiệu</Text>
          <Text style={styles.artTitle}>Nghệ thuật</Text>
          <Text style={styles.suisekiTitle}>đá cảnh SUISEKI</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStart}
          onPress={() => navigation.navigate('bottomTab')}
        >
          <Text style={styles.textStart}>Bắt đầu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: Sizes.paddingWidth,
    paddingTop: parseSizeHeight(184),
    paddingBottom: parseSizeHeight(26),
  },
  introduceTitle: {
    fontSize: Sizes.text_h5,
    lineHeight: parseSize(28),
    fontWeight: 500,
    color: Colors.gray_400,
    marginBottom: parseSizeHeight(12),
  },
  artTitle: {
    fontSize: Sizes.text_h3,
    lineHeight: parseSize(40),
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'black',
    fontFamily: FontStyles.PenumbraBold,
  },
  suisekiTitle: {
    fontSize: Sizes.text_h3,
    lineHeight: parseSize(40),
    fontWeight: 700,
    color: Colors.primary_600,
    fontFamily: FontStyles.PenumbraBold,
  },
  buttonStart: {
    height: parseSizeHeight(48),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary_600,
    borderRadius: Sizes.radius,
  },
  textStart: {
    color: 'white',
    fontSize: Sizes.text_subtitle1,
    fontWeight: 600,
  },
});
