import React from 'react';
import { Typography, Grid, Card, CardContent } from '@material-ui/core';

const Posts = () => {
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
    <Grid container>
    {posts.map(post => (
      <Card key={post.id}>
        <CardContent>
          <Typography>
            {post.title}
          </Typography>
        </CardContent>
      </Card>
    ))}
    </Grid>
  )
}

export default Posts;
