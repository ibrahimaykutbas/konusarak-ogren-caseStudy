import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import Header from '../../components/Header/Header';

import styles from './EpisodeDetail.style';

const EpisodeDetail = ({navigation, route}) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacter();
  }, []);

  const data = route.params;

  const getCharacter = async () => {
    function getData(characters) {
      characters.forEach(async character => {
        const response = await fetch(character);
        const data = await response.json();
        setCharacters(currentList => [...currentList, data]);
      });
    }

    getData(data.characters);
  };

  const handleCharacter = id => {
    navigation.navigate('CharacterDetailScreen', id);
  };

  return (
    <View style={styles.container}>
      <Header episode={data.episode} />
      <ScrollView style={styles.innerContainer}>
        <Text style={styles.title}>Air Date</Text>
        <Text style={styles.text}>{data.air_date}</Text>

        <Text style={styles.title}>Characters</Text>

        <View style={styles.charactersContainer}>
          {characters.map(character => (
            <TouchableOpacity
              key={character.id}
              style={styles.characterCard}
              onPress={() => handleCharacter(character.id)}>
              <Text style={styles.characterTitle}>{character.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default EpisodeDetail;
