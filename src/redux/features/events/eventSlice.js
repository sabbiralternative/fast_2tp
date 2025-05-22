import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: null,
  stake: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setStake: (state, action) => {
      state.stake = action.payload;
    },
  },
});

export const { setPrice, setStake } = eventSlice.actions;

export default eventSlice.reducer;
