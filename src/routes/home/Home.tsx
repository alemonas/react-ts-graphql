import Container from '@material-ui/core/Container';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostsList from '../../containers/Posts/PostsList';
import { loadPostsAsync, postsSelector } from '../../redux/postsSlice';


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, data: posts } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(loadPostsAsync());
  }, [dispatch]);

  return (
    <>
      {loading && 'loading posts...'}
      <Container>
        <PostsList posts={posts} />
      </Container>
    </>
  )
}

export default Home;
