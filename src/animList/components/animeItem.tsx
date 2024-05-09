import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';

const AnimeItem: FC<any> = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{item.title?.userPreferred}</Text>
      <Text>{item.seasonYear}</Text>
    </View>
  );
};

export default AnimeItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 15,
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});
