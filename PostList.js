import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import classes from './postlist.module.css';

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => <Post key={post.id} post={post} />);

  return (
    <>
      <h2 className={classes.postHead}>Posts</h2>
      <section className={classes.container}>{renderedPosts}</section>
    </>
  );
};

export default PostList;
