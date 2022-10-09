import React, {useState} from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default function InputTest() {
  const [text, setText] = useState('hello text input');

  const onChange = value => {
    setText(value);
  };

  return (
    <>
      <Text>{text}</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={onChange}
      />
    </>
  );
}
