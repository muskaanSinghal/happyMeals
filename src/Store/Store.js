import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "logIn",
  initialState: {
    isLoggedIn: false,
    idToken: "",
  },
  reducers: {
    setIdToken(state, action) {
      console.log(action.payload);
      state.idToken = action.payload;
    },
    setLoginState(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    loginSlice: loginSlice.reducer,
  },
});

export const loginActions = loginSlice.actions;
//redux thunk
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcdlqTJAECha-onlpn8f3TKDROoLxIzBA

export const dispatcher = (url) => {
  return (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/JSON",
        },
      });

      const data = await response.json();
      // console.log(data);
      if (data.idToken) {
        console.log(`i have successfully logged in`);
        dispatch(loginActions.isLoggedIn(true));
      }
    } catch (err) {
      alert(err.message);
    }
  };
};

export default store;
