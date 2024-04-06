import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../../../api/auth"; 
import { AppDispatch } from "../../store";
import { TUserInitialState } from "./user.type";
import { USER_WALLET_ADDRESS } from "../../../constants/api.constant"; 
import { ErrorFunctionType, FinallyFunctionType, get, SuccessFunctionType } from "../../../api/api";
import { ENDPOINT } from "../../../constants/endpoint.contant";

const initialState: TUserInitialState = {
  information: {
    id: null,
    email: null,
    address: localStorage.getItem(USER_WALLET_ADDRESS),
    token: null,
    name: null,
    refcode: null,
    status: null,
    ref: null,
    created_at: null,
    updated_at: null,
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    SET_INFOMATION: (state, { payload }) => {
      state.information = {
        id: payload.id,
        address: payload.address,
        email: payload.email,
        token: payload.token,
        name: payload.name,
        refcode: payload.refcode,
        status: payload.status,
        ref: payload.ref,
        created_at: payload.created_at,
        updated_at: payload.updated_at,
      };
    },
    RESET_USER: () => initialState,
  },
});

export const { SET_INFOMATION, RESET_USER } = userSlice.actions;

export default userSlice.reducer;

//getInfomationMID
export const getInfomationMID = (successCallback?: SuccessFunctionType, errorCallback?: ErrorFunctionType, finallyCallback?: FinallyFunctionType) => {
  return async (dispatch: AppDispatch) => {
    console.log("getInfomationMID");
    get(
      ENDPOINT.ACCOUNT.INFO(),
      (res: any) => {
        console.log("getInfomationMID return", res);
        dispatch(SET_INFOMATION(res.data));
        if (successCallback) successCallback(res.data);
      },
      (error: any) => {
        console.log("getInfomationMID error", error);
        logout();
        if (errorCallback) errorCallback(error);
      },
      () => {
        if (finallyCallback) finallyCallback();
      },
    );
  };
};
