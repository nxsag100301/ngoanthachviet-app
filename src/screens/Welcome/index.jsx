import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Text onPress={() => navigation.navigate('bottomTab')}>Go to home</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
