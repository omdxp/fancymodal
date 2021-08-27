import {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Modal from 'react-native-modal';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Button title="open modal" onPress={() => setIsModalVisible(true)} />
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <Text>Hello World</Text>
        </View>
      </Modal>
    </View>
  );
}
