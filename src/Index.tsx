import {ApolloProvider} from '@apollo/client';
import React from 'react';
import Home from './screens/Home/Home';
import {client} from './utils/Client';

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default Index;
