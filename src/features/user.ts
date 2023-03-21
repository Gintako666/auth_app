import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/User';

const initialState: { user: User | null } = { user: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_value, action: PayloadAction<User>) => {
      return { user: action.payload };
    },
    removeUser: () => {
      return { user: null };
    },
  },
});

export const { actions } = userSlice;

export default userSlice.reducer;
