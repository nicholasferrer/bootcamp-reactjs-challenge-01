import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader avatar={props.data.avatar} name={props.data.author} time={props.data.createdAt} />
    <p>{props.data.content}</p>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
