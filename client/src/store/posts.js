import { createSlice } from "@reduxjs/toolkit";
// import { questions } from "./../assets/data/data";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    questionAdded: (questions, action) => {
      questions.push(action.payload);
    },
    questionUpdated: (questions, action) => {
      return questions.map((item) => (item.id === action.payload?.id ? action.payload : item));
    },
    questionDeleted: (questions, action) => {
      console.log(action);
      return questions.filter((item) => item.id !== action.payload);
    },
    populateQuestions: (questions, action) => {
      return action.payload;
    },
  },
});

export const getQuestions = (state) => {
  return state.questions;
};

export const { questionAdded, questionUpdated, questionDeleted, populateQuestions } = postSlice.actions;
export default postSlice.reducer;
