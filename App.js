import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Modal from 'react-native-simple-modal';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  const modalDidOpen = () => console.log('Modal did open.');

  const modalDidClose = () => {
    setIsModalVisible(false);
    console.log('Modal did close.');
  };

  const moveUp = () => {
    setOffset(-100);
  };

  const resetPosition = () => {
    setOffset(0);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="open modal" onPress={() => setIsModalVisible(true)} />
      <Modal
        offset={offset}
        open={isModalVisible}
        modalDidOpen={modalDidOpen}
        modalDidClose={modalDidClose}
        style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, marginBottom: 10}}>Hello world!</Text>
          <TouchableOpacity style={{margin: 5}} onPress={moveUp}>
            <Text>Move modal up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 5}} onPress={resetPosition}>
            <Text>Reset modal position</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 5}} onPress={closeModal}>
            <Text>Close modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
