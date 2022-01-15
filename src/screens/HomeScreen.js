import React from 'react';
import { Text, View, Button } from 'react-native';

export default function HomeScreen ({ navigation }) {
  return (
    <View style={styles}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

const styles = { flex: 1, alignItems: 'center', justifyContent: 'center' };