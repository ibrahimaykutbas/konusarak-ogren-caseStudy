import React from 'react';
import {View, Text} from 'react-native';

import styles from './Header.style';

const Header = ({episode}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rick and Morty</Text>
      {episode && <Text style={styles.episode}>{episode}</Text>}
    </View>
  );
};

export default Header;
