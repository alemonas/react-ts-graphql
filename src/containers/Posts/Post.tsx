import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { IPost } from '../../api/blogApi';

interface IProps {
  post: IPost;
}

const useStyles = makeStyles({
  media: {
    height: 285,
  },
});

const Post: React.FC<IProps> = ({ post }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.picsum.photos/id/39/550/285.jpg"
          title="Image title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;
