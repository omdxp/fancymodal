import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Modal from 'react-native-simple-modal';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
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
        closeOnTouchOutside={false}
        style={{alignItems: 'center'}}
        modalStyle={{
          borderRadius: 35,
          margin: 20,
          padding: 10,
          backgroundColor: '#d21221',
        }}
        overlayStyle={{
          backgroundColor: 'rgba(110, 0, 0, 0.75)',
          flex: 1,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, marginBottom: 10, color: 'black'}}>
            Hello world!
          </Text>
          <TouchableOpacity style={{margin: 5}} onPress={moveUp}>
            <Text style={{color: 'black'}}>Move modal up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 5}} onPress={resetPosition}>
            <Text style={{color: 'black'}}>Reset modal position</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 5}} onPress={closeModal}>
            <Text style={{color: 'black'}}>Close modal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{margin: 5}}
            onPress={() => setIsModalVisible2(true)}>
            <Text style={{color: 'black'}}>Open modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        offset={offset}
        open={isModalVisible2}
        modalDidClose={() => setIsModalVisible2(false)}
        style={{alignItems: 'center'}}
        useNativeDriver={true}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, marginBottom: 10, color: 'black'}}>
            Hello world!
          </Text>
          <TouchableOpacity style={{margin: 5}} onPress={moveUp}>
            <Text style={{color: 'black'}}>Move modal up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 5}} onPress={resetPosition}>
            <Text style={{color: 'black'}}>Reset modal position</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{margin: 5}}
            onPress={() => setIsModalVisible2(false)}>
            <Text style={{color: 'black'}}>Close modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
