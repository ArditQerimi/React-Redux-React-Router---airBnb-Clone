// import { configureStore } from "@reduxjs/toolkit";

// import categoriesCarouselSlice from "./categoriesCarousel-slice";

// const store = configureStore({
//   reducer: { categoriesCarousel: categoriesCarouselSlice.reducer },
// });

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import categoriesCarouselSlice from "./categoriesCarousel-slice";

// export const store = configureStore({
//   reducer: {
//     carousel: categoriesCarouselReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import categoriesCarouselReducer from "./categoriesCarousel-slice";
import cardCarouselReducer from "./cardCarousel-slice";
// console.log(cardCarouselReducer);

const store = configureStore({
  reducer: {
    categoriesCarousel: categoriesCarouselReducer,
    cardCarousel: cardCarouselReducer,
  },
});

export default store;
