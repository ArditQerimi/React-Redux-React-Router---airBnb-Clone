import { createSlice } from "@reduxjs/toolkit";

const categoriesCarouselSlice = createSlice({
  name: "categoriesCarousel",
  initialState: {
    // slideIndex: 1,
    value: 0,
    slidesCount: 2,
    faChevronLeft: false,
    faChevronRight: true,
  },

  reducers: {
    slideNext: (state, action) => {
      // console.log("PREVIOUS VALUE", state.value);
      if (state.value !== action.payload.length - 1) {
        state.value = state.value + 1;
        console.log(state.value);
        // state.faChevronLeft = !state.faChevronLeft;
        // state.faChevronRight = state.faChevronRight;
        // console.log(`******* SET TO NEXT VALUE: [${state.value}] *******`);
        // console.log("buttonLeft set to:", state.faChevronLeft);
        // console.log("buttonRight set to:", state.faChevronRight);
      } else if (state.value === action.payload.length - 1) {
        // state.faChevronLeft = state.faChevronLeft;
        // state.faChevronRight = !state.faChevronRight;
        state.value = 0;
        console.log(state.value);
        // console.log("TURNED TO INITIAL VALUE", state.value);
      }
    },

    slidePrev: (state, action) => {
      // console.log(action.payload);
      if (state.value !== 0) {
        // console.log(`[Statement 1]: [${state.value !== 1}]`);
        state.value = state.value - 1;
        console.log(state.value);
        // state.faChevronLeft = state.faChevronLeft;
        // state.faChevronRight = !state.faChevronRight;
        // console.log(`state.value set to: ${state.value}`);
        // console.log(`******* SET TO PREV VALUE: [${state.value}] *******`);
        // console.log("buttonLeft set to:", state.faChevronLeft);
        // console.log("buttonRight set to:", state.faChevronRight);
      } else if (state.value === 0) {
        state.value = action.payload.length - 1;
        console.log(state.value);
        // state.faChevronLeft = !state.faChevronLeft;
        // state.faChevronRight = state.faChevronRight;
        // console.log(`[Statement 2]: [${state.value === 1}]`);
        // console.log(`state.value was: ${state.value}`);
      }
    },
  },
});

// export const categoriesCarouselActions = categoriesCarouselSlice.actions;
// console.log(categoriesCarouselActions);

// export default categoriesCarouselSlice;

export const { slideNext, slidePrev } = categoriesCarouselSlice.actions;

export default categoriesCarouselSlice.reducer;
