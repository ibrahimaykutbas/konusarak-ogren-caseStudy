import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './EpisodeCard.style';

const EpisodeCard = ({episode, navigation}) => {
  const handleDetail = () => {
    navigation.navigate('EpisodeDetailScreen', episode, navigation);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleDetail()}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: 'https://p4.wallpaperbetter.com/wallpaper/410/59/609/rick-and-morty-tv-rick-sanchez-morty-smith-wallpaper-preview.jpg',
          }}
        />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {episode.name}
      </Text>
      <Text style={styles.episode}>{episode.episode}</Text>
    </TouchableOpacity>
  );
};

export default EpisodeCard;
