import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import Header from '../../components/Header/Header';
import EpisodeCard from '../../components/card/EpisodeCard/EpisodeCard';

import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch/useFetch';

import styles from './Home.style';

const Home = ({navigation}) => {
  const [allData, setAllData] = useState([]);
  const [loadMore, setLoadMore] = useState(
    `https://rickandmortyapi.com/api/episode?page=0`,
  );

  /*   const getAllData = async () => {
    const responseData = await fetch(loadMore);
    const data = await responseData.json();

    console.log([...allData, data.results]);

    setLoadMore(data.info.next);
    setAllData([...allData, data.results]);
  };

  useEffect(() => {
    getAllData();
  }, []); */

  const {data} = useFetch(Config.API_EPISODE_URL);

  const renderEpisode = ({item}) => (
    <EpisodeCard episode={item} navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.episodeContainer}>
        <FlatList
          data={data.results}
          renderItem={renderEpisode}
          key={item => item.toString()}
          /*      onEndReached={getAllData}
          onEndReachedThreshold={0.8} */
        />
      </View>
    </View>
  );
};

export default Home;
