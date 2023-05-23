import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { ButtonPublish, ButtonDeletePost } from '../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { LocationIcon } from '../../assets/SvgIcons';

export default function CreatePostsScreen() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.postPhoto} />
      <Text style={styles.text}>Upload photo</Text>
      <TextInput
        placeholder="Name..."
        onChangeText={(newName) => setName(newName)}
        value={name}
        style={styles.input}
      />
      <View style={styles.location}>
        {LocationIcon}
        <TextInput
          placeholder="Location"
          onChangeText={(newLocation) => setLocation(newLocation)}
          value={location}
          style={styles.inputLocation}
        />
      </View>

      <ButtonPublish onPress={() => navigation.navigate('PostsScreen')} />
      <View style={styles.delete}>
        <ButtonDeletePost onPress={() => navigation.navigate('PostsScreen')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  postPhoto: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    marginTop: 32,
    marginBottom: 8,
    alignItems: 'center',
  },
  input: {
    height: 50,
    padding: 16,
    borderBottomWidth: 1,
    marginBottom: 24,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    borderBottomColor: '#E8E8E8',
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    marginBottom: 24,
  },
  delete: {
    alignItems: 'center',
    marginTop: 32,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 24,
    borderBottomColor: '#E8E8E8',
  },
  inputLocation: {
    height: 50,
    // padding: 16,
    // borderBottomWidth: 1,
    // marginBottom: 24,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    // borderBottomColor: '#E8E8E8',
  },
});
