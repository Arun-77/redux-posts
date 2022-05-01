import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './postForm.module.css';
import { addPost } from '../features/posts/postSlice';
import { openModal } from '../features/modalSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title || content || author) {
      const time = new Date();

      dispatch(addPost(title, content, author, time));
      setTitle('');
      setContent('');
      setAuthor('');
    } else {
      dispatch(openModal());
    }
  };

  return (
    <section className={classes.formContainer}>
      <h2>Add a New Post</h2>
      <form className={classes.form}>
        <div>
          <label htmlFor="postTitle">Post Title : </label>
          <br />
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="postAuthor">Author : </label>
          <br />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="postContent">Content : </label>
          <br />
          <input
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button
            className={classes.submitBtn}
            type="button"
            onClick={onSavePostClicked}
          >
            Add Post
          </button>
        </div>
      </form>
      <hr className={classes.underline} />
    </section>
  );
};

export default AddPostForm;
