import React, { useState } from 'react';
import classes from './post.module.css';
import ReactionButton from '../features/ReactionButton';

const Post = (props) => {
  const [readMore, setReadMore] = useState(true);
  const { title, content, author, time } = props.post;

  return (
    <article className={classes.card}>
      <h3>{title}</h3>
      <p>
        {content.length > 40
          ? readMore
            ? `${content.substring(0, 44)}...`
            : content
          : content}
        {content.length > 40 ? (
          <button
            className={classes.showBtn}
            onClick={() => {
              setReadMore((prev) => !prev);
            }}
          >
            {readMore ? '  Read More' : '  Show Less'}
          </button>
        ) : null}
      </p>
      <div className={classes.author}>
        <cite>By {author}</cite>
        <cite className={classes.time}>{`${
          time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
        }:${time.getMinutes()}:${time.getSeconds()} ${
          time.getHours() > 12 ? 'PM' : 'AM'
        }`}</cite>
      </div>

      <ReactionButton post={props.post} />
    </article>
  );
};

export default Post;
