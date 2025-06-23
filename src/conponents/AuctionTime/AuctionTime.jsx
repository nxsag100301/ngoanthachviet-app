import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Colors,
  parseSize,
  parseSizeHeight,
  parseSizeWidth,
  Sizes,
} from '../../theme';

const AuctionTime = () => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Image
          source={require('../../assets/icons/clock.png')}
          style={styles.iconClock}
        />
        <Text style={styles.labelText}>Bắt đầu trong</Text>
      </View>
      <View style={styles.time}>
        <View style={styles.rectangleTime}>
          <Text style={styles.labelTime}>1</Text>
        </View>
        <View style={styles.rectangleTime}>
          <Text style={styles.labelTime}>15</Text>
        </View>
        <View style={styles.rectangleTime}>
          <Text style={styles.labelTime}>29</Text>
        </View>
      </View>
    </View>
  );
};

export default AuctionTime;

const styles = StyleSheet.create({
  container: {
    height: parseSizeHeight(34),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: parseSizeWidth(4),
    backgroundColor: Colors.blue_bg,
    borderRadius: parseSize(6),
    marginVertical: parseSizeHeight(8),
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: parseSizeWidth(2),
  },
  labelText: {
    fontSize: Sizes.text_tagline2,
    color: Colors.blue,
  },
  iconClock: {
    width: parseSizeWidth(14),
    height: parseSizeHeight(14),
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
    gap: parseSizeWidth(4),
  },
  rectangleTime: {
    height: parseSizeHeight(22),
    width: parseSizeWidth(16),
    backgroundColor: Colors.blue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: parseSize(2),
    borderRadius: parseSize(2),
  },
  labelTime: {
    color: 'white',
    fontSize: Sizes.text_tagline2,
    fontWeight: 700,
    letterSpacing: 0.15,
  },
});
