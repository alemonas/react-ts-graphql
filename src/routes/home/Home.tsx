import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import React from 'react';

import PostsList from '../../containers/Posts/PostsList';

const EXCHANGE_RATES = gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
      body
    }
    meta {
      totalCount
    }
  }
}
`;

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: {
      "options": {
        "paginate": {
          "page": 1,
          "limit": 10
        }
      }
    }
  });
  
  if (loading) return <CircularProgress />;
  if (error) return <p>Error :(</p>;

  const posts = data.posts.data;

  return (
    <Container>
      <PostsList posts={posts} />
    </Container>
  )
}

export default Home;
