import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Modal from 'react-native-modalbox';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="open modal" onPress={() => setIsModalVisible(true)} />
      <Modal isOpen={isModalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Hello World!</Text>
        </View>
      </Modal>
    </View>
  );
}
