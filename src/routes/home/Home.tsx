import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Posts from '../../containers/Posts/Posts';

function Home() {
  const posts = [
    {
      id: 'dfadsfdsf23423423',
      title: 'post 1',
    },
    {
      id: 'dfadsfdsf234234233',
      title: 'post 2',
    },
    {
      id: 'dfadsfdsf234234234',
      title: 'post 3',
    }
  ]
  return (
    <Container>
      <Typography variant="h1">
        Posts
      </Typography>
      <Posts />
    </Container>
  )
}

export default Home;
