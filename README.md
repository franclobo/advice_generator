# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Redux toolkit](https://redux.js.org/usage/nextjs) - API fetching
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

```js
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '@/lib/store';

export interface AdviceResponse {
  id: number;
  advice: string;
}

export const fetchAdvice = createAsyncThunk(
  'advice/fetchAdvice',
  async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data.slip as AdviceResponse;
  }
);

export interface AdviceState {
  value: string;
  id: number;
}

const initialState: AdviceState = {
  value: '',
  id: 0,
};

export const adviceSlice = createSlice({
  name: 'advice',
  initialState,
  reducers: {
    setValueAndId: (state, action: PayloadAction<AdviceState>) => {
      state.value = action.payload.value;
      state.id = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdvice.fulfilled, (state, action) => {
      state.value = action.payload.advice;
      state.id = action.payload.id;
    });
  }
});

export const { setValueAndId } = adviceSlice.actions;

export const selectAdvice = (state: RootState) => state.advice.value;
export const selectAdviceId = (state: RootState) => state.advice.id;

export default adviceSlice.reducer;

```

### Continued development

I want to continue learning about Redux Toolkit and Next.js with Typescript. I think I need to improve my skills in these technologies.

### Useful resources

- [Redux Toolkit with NextJS](https://redux.js.org/usage/nextjs) - This helped me to understand how to use Redux Toolkit with Next.js. I really liked this pattern and will use it going forward.
- [Redux Typescript](https://redux.js.org/tutorials/typescript-quick-start) - This is an amazing article which helped me finally understand how to use Redux with Typescript. I'd recommend it to anyone still learning this concept.

## Author

- Website - [WebMinds Studio](https://www.webmindsstudio.com/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- Twitter - [@Pancho2788](https://twitter.com/Pancho2788)

## Acknowledgments

I want to thank Frontend Mentor for this challenge. And anyone who helped me to understand Redux Toolkit and Next.js with Typescript.
