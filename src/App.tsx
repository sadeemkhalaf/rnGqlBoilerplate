import React from 'react';
import {SafeAreaView} from 'react-native';
import AnimeListViewComponent from './animList/animeListView';
import {ApolloProvider} from '@apollo/client';
import {client} from './network/graphqlClient';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView />
      <AnimeListViewComponent />
    </ApolloProvider>
  );
}

export default App;
