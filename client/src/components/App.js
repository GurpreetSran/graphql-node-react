import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Books from '../components/Books';

const client = new ApolloClient({
    uri: '/graphql'
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Books />
        </ApolloProvider>
    );
}

export default App;