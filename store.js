import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postSlice';
import ModalReducer from './features/modalSlice';

const store = configureStore({
  reducer: { posts: postsReducer, modal: ModalReducer },
});

export default store;
