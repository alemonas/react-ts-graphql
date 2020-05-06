import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Posts from '../../containers/Posts/Posts';

function Home() {
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
