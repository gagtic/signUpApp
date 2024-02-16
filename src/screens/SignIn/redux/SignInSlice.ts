import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  email: string;
  name: string;
  uid: string;
  media: { url: string; type: string };
}

export interface UserState {
  value: IUser | undefined;
}

const initialState: UserState = {
  value: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.value = action.payload;
    },
    setUserMedia: (
      state,
      action: PayloadAction<{ url: string; type: string }>
    ) => {
      state.value && (state.value.media = action.payload);
    },
    resetUser: (state) => {
      state.value = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setUserMedia, resetUser } = userSlice.actions;

export default userSlice.reducer;
