import React, {useState} from 'react';
import {Text, Button} from 'react-native';

export default function CatDog() {
  const [bool, setBool] = useState(false);

  return (
    <>
      <Text>{bool ? 'cat' : 'dog'}</Text>
      <Button title="clickme" onPress={() => setBool(prev => !prev)} />
    </>
  );
}
