import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialPostState = [
  {
    id: 1,
    title: 'Learning Redux Toolkit',
    content: "I've heard good things",
    author: 'Arun Kumar',
    time: new Date(2022, 0, 30, 8, 58, 55),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: 'Slices...',
    author: 'Tony Stark',
    content:
      'The more I say slice, the more I want pizza & I like to travel to that place toeat and enjoy!',
    time: new Date(2021, 11, 22, 16, 22, 40),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 3,
    title: 'Pieces...',
    author: 'Jack Dorsey',
    content:
      'The more I say slice, the more I want pizza & I like to travel to that place toeat and enjoy! sld foldif odifj ofj oiefj ',
    time: new Date(2021, 10, 17, 7, 34, 57),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: 'posts',
  initialState: initialPostState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title, content, author, time) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            author,
            time,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      } else {
        console.log('hii');
      }
    },
  },
});

export const { addPost, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
