import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { loadEntriesAsync } from '../../redux/entriesSlice'
import { loadPosts } from '../../redux/actions/postActions';
import PostsList from '../../containers/Posts/PostsList';
import { Counter } from '../../features/counter/Counter';


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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
    dispatch(loadEntriesAsync());
  }, [dispatch]);

  const posts2 = useSelector((state: any) => {
    return state.posts;
  });

  const entries = useSelector((state: any) => {
    return state.entries;
  })

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

  useEffect(() => {
    console.log(posts2)
    console.log('entries', entries);
  })
  
  if (loading) return <CircularProgress />;
  if (error) return <p>Error :(</p>;

  const posts = data.posts.data;

  return (
    <Container>
      <PostsList posts={posts} />
      <Counter />
    </Container>
  )
}

export default Home;
