import React from "react";
import Grid from "@material-ui/core/Grid";
import Post, { IPost } from './Post';

interface IProps {
  posts: IPost[];
};

const PostsList: React.FC<IProps> = ({ posts }) => {
  return (
    <Grid container spacing={4}>
      {posts.map((post) => {
        return (
          <Grid key={post.id} item xs={6}>
            <Post post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PostsList;
