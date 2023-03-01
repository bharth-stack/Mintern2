import { createSlice} from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "showMail",
  initialState: {
    Data: [],
    Data2: [],
  },
  reducers: {
    cartData: (state, action) => {
      state.Data.push(action.payload);
    },
    data2Cart: (state, action) => {
      state.Data2.push(action.payload);
    },
  },
});

export const { cartData, data2Cart } = counterSlice.actions;
export default counterSlice.reducer;
