import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';

import styles from './CharacterDetail.style';

const CharacterDetail = ({route}) => {
  const id = route.params;

  const {data: responseData} = useFetch(`${Config.API_CHARACTER_URL}/${id}`);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: responseData.image}}
          resizeMode="stretch"
        />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <View style={styles.contentLine}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.text}>{responseData.name}</Text>
        </View>
        <View style={styles.contentLine}>
          <Text style={styles.title}>Gender</Text>
          <Text style={styles.text}>{responseData.gender}</Text>
        </View>
        {responseData.location && (
          <View style={styles.contentLine}>
            <Text style={styles.title}>Location</Text>
            <Text style={styles.text}>{responseData.location.name}</Text>
          </View>
        )}

        <View style={styles.contentLine}>
          <Text style={styles.title}>Status</Text>
          <Text style={styles.text}>{responseData.status}</Text>
        </View>
        <View style={styles.contentLine}>
          <Text style={styles.title}>Species</Text>
          <Text style={styles.text}>{responseData.species}</Text>
        </View>
      </View>
    </View>
  );
};

export default CharacterDetail;
