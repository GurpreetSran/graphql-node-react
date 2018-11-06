import React from 'react';

import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo';

const getQuery = gql`
    {
        books{
            name,
            id
        }
    }
`
const Books = (props) => {
    console.log(props);
    if (props.data.loading) {
        return null;
    }
    return (
     <div>
        {props.data.books.map((book) => <div key={book.name}>{book.name}</div>)}
    </div>
    );
}

export default graphql(getQuery)(Books);