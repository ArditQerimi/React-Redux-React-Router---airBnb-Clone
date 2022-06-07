import { createSlice } from "@reduxjs/toolkit";

const cardCarouselSlice = createSlice({
  name: "cardCarousel",
  initialState: {
    // value: 0,
    index: 0,
    // slidesCount: 2,
  },

  reducers: {
    slideNext: (state, action) => {
      console.log(`Prev state: ${state.index}`);
      console.log(`Action.payload ${action.payload}`);
      if (state.index >= action.payload - 1) state.index = 0;
      else state.index += 1;
    },
    slidePrev: (state, action) => {
      console.log(action.payload);
      if (state.index >= action.payload - 1) state.index = 0;
      else state.index += 1;
    },
  },

  // reducers: {
  //   slideNext: (state, action) => {
  //     // console.log(action);
  //     console.log(`Action.payload: ${action.payload.length}`);
  //     // console.log(
  //     //   `Prev Value: ${state.value}, Array length [${
  //     //     action.payload.length
  //     //   }] - 1 = [${action.payload.length - 1}]`
  //     // );
  //     if (state.value !== action.payload.length - 1) {
  //       state.value = state.value + 1;
  //       // console.log(`Value set to: ${state.value}`);
  //       // console.log(state.value);
  //     } else if (state.value === action.payload.length - 1) {
  //       state.value = 0;
  //       // console.log(`Value set to: ${state.value}`);
  //       // console.log(state.value);
  //     }
  //   },

  //   slidePrev: (state, action) => {
  //     // console.log(
  //     //   `Prev Value: ${state.value}, Array length: ${action.payload.length - 1}`
  //     // );
  //     if (state.value !== 0) {
  //       state.value = state.value - 1;
  //       // console.log(state.value);
  //       // console.log(`Value set to: ${state.value}`);
  //     } else if (state.value === 0) {
  //       state.value = action.payload.length - 1;
  //       // console.log(`Value set to: ${state.value}`);
  //       // console.log(state.value);
  //     }
  //   },
  // },
});

export const { slideNext, slidePrev } = cardCarouselSlice.actions;

export default cardCarouselSlice.reducer;
