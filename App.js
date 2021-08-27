import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {AnimatedModal} from 'react-native-root-modal';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="open modal" onPress={() => setIsModalVisible(true)} />
      <AnimatedModal visible={isModalVisible}>
        <View style={{backgroundColor: '#fff', padding: 20}}>
          <Text>Hello World!</Text>
          <Button
            title="close modal"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </AnimatedModal>
    </View>
  );
}
