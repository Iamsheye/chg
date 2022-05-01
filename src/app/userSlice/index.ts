import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  loading: boolean;
  error: string;
  isLoggedIn: boolean;
  user: Record<string, any>;
  authUser: Record<string, any>;
  tokenResponse: string;
};

const initialState: State = {
  loading: false,
  error: "",
  isLoggedIn: false,
  user: {},
  authUser: {},
  tokenResponse: localStorage.getItem("tokenResponse") || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    login: (state, action: PayloadAction<Record<string, any>>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    addAuthUser: (state, action: PayloadAction<Record<string, any>>) => {
      state.authUser = action.payload;
    },
    addTokenResponse: (state, action: PayloadAction<string>) => {
      state.tokenResponse = action.payload;
      localStorage.setItem("tokenResponse", action.payload);
    },
    logout: (state) => {
      state.user = {};
      state.authUser = {};
      state.isLoggedIn = false;
      localStorage.removeItem("tokenResponse");
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  login,
  logout,
  setLoading,
  setError,
  addAuthUser,
  addTokenResponse,
} = userSlice.actions;

export default userSlice.reducer;
