import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Colors, parseSizeHeight, parseSizeWidth, Sizes } from '../../theme';

const MyAccordion = ({ title, titleColor, children, defaultOpen = false }) => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    if (defaultOpen) setCollapsed(false);
  }, [defaultOpen]);

  const arrowUri = !collapsed
    ? require('../../assets/icons/arrow-up.png')
    : require('../../assets/icons/arrow-down.png');

  return (
    <View style={styles.accordion}>
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <View style={styles.header}>
          <Text style={[styles.headerText, { color: titleColor }]}>
            {title}
          </Text>
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

export default MyAccordion;

const styles = StyleSheet.create({
  accordion: {},
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: parseSizeHeight(12),
    paddingBottom: parseSizeHeight(20),
    borderBottomWidth: 1,
    borderColor: Colors.gray_50,
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
    paddingVertical: parseSizeHeight(18),
    display: 'flex',
    flexDirection: 'column',
    gap: parseSizeHeight(8),
  },
});
