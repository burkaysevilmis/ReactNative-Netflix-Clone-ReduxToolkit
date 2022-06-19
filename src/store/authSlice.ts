import {LoginValues} from './../screen/auth/Login';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const login = createAsyncThunk(
  'auth/login',
  async (values: LoginValues) => {
    try {
      const response = await auth().signInWithEmailAndPassword(
        values.email,
        values.password,
      );
      console.log(response);
      return response.user;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);
export const loginCheck = createAsyncThunk('auth/loginCheck', async () => {
  try {
    let jsonValue = await AsyncStorage.getItem('@auth');
    jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null;

    return jsonValue != null ? jsonValue : false;
  } catch (e) {
    console.log(e);
  }
});

// const saveAsyncStorage = async (customer?: Customer, userName?: string) => {
//   try {
//     const jsonValue = JSON.stringify(customer);
//     const jsonValueUsername = JSON.stringify(userName);
//     await AsyncStorage.setItem('@userName', jsonValueUsername);
//     await AsyncStorage.setItem('@auth', jsonValue);
//   } catch (e) {
//     console.log(e);
//   }
// };

export type AuthModel = {
  user?: FirebaseAuthTypes.User;
  isLogin: boolean;
  loginLoading: boolean;
  globalLoading: boolean;
};

const initialState: AuthModel = {
  user: undefined,
  isLogin: false,
  loginLoading: false,
  globalLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showLoading: state => {
      if (!state.globalLoading) {
        state.globalLoading = true;
      }
    },
    hideLoading: state => {
      if (state.globalLoading) {
        state.globalLoading = false;
      }
    },
  },
  extraReducers: {
    [login.pending.type]: state => {
      state.loginLoading = true;
    },
    [login.fulfilled.type]: (
      state,
      action: PayloadAction<FirebaseAuthTypes.User>,
    ) => {
      console.log(action);
      if (action.payload) {
        state.user = action.payload;
        state.isLogin = true;
      }
      state.loginLoading = false;
    },
    [login.rejected.type]: (state, action) => {
      console.log(action);
      state.loginLoading = false;
    },
  },
});
export const {hideLoading,showLoading} = authSlice.actions;
export default authSlice.reducer;
