import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="open modal" onPress={() => setIsModalVisible(true)} />
    </View>
  );
}
