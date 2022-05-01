import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  loading: boolean;
  error: string;
  isLoggedIn: boolean;
  user: Record<string, any>;
};

const initialState: State = {
  loading: false,
  error: "",
  isLoggedIn: false,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    login: (state, action: PayloadAction<Record<string, any>>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
