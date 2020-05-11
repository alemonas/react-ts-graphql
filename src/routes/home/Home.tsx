import Container from '@material-ui/core/Container';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostsList from '../../containers/Posts/PostsList';
import { loadPostsAsync, postsSelector } from '../../redux/postsSlice';


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { data: posts } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(loadPostsAsync());
  }, [dispatch]);

  return (
    <Container>
      <PostsList posts={posts} />
    </Container>
  )
}

export default Home;
