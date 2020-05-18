import Container from '@material-ui/core/Container';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostsList from '../../components/posts/PostsList';
import { loadPostsAsync, postsSelector } from '../../redux/postsSlice';


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { hasErrors, loading, data: posts } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(loadPostsAsync());
  }, [dispatch]);

  return (
    <>
      {loading && 'Loading posts...'}
      {hasErrors && 'Unable to fetch Posts'}
      <Container>
        <PostsList posts={posts} />
      </Container>
    </>
  )
}

export default Home;
