import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import AnimeItem from './components/animeItem';
import {useGetAnimeListLazyQuery} from '../network/queries/__generated__/graphql';

const AnimeListViewComponent = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [getAnimeList, {data, loading, error}] = useGetAnimeListLazyQuery({
    variables: {
      page: 1,
      perPage: 10,
    },
  });

  const onRefresh = useCallback(() => {
    setCurrentPage(prev => prev + 1);
    getAnimeList();
  }, [getAnimeList]);

  useEffect(() => {
    getAnimeList({
      variables: {
        page: currentPage,
        perPage: 15,
      },
    });
  }, [currentPage, getAnimeList]);

  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={data?.Page?.media}
        renderItem={({item}) => <AnimeItem item={item} />}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
      {error && <Text>{`Error: ${error.message}`}</Text>}
      <Text>{`Page ${currentPage}`}</Text>
    </View>
  );
};

export default AnimeListViewComponent;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 32,
  },
});
