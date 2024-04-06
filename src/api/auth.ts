import CryptoJS from "crypto-js";
import { RESET_USER } from "../store/slices/user/user.slice"; 
import { store } from "../store/store"; 
import { ACCESS_TOKEN_KEY, ACCESS_TOKEN_KEY_GAME, SCOPES_KEY, USER_WALLET_ADDRESS } from "../constants/api.constant";

export const logoutReturnTo = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(SCOPES_KEY);
  localStorage.removeItem("wallet");
  window.location.reload();
};

export const logout = () => {
  // localStorage.removeItem(USER_WALLET_ADDRESS);
  // localStorage.removeItem(WALLET_NAME);
  // localStorage.removeItem(ACCESS_TOKEN_KEY);
  // localStorage.removeItem(SCOPES_KEY);
  localStorage.clear();
  const dispatch = store.dispatch;
  dispatch(RESET_USER());
};

export const setUserWalletAddress = (userWalletAddress: string) => {
  if (!userWalletAddress) return;
  localStorage.setItem(USER_WALLET_ADDRESS, userWalletAddress);
};
export const getUserWalletAddress = () => {
  localStorage.getItem(USER_WALLET_ADDRESS);
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, Encrypt(accessToken, ACCESS_TOKEN_KEY));
};
export const setAccessTokenGame = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY_GAME, Encrypt(accessToken, ACCESS_TOKEN_KEY_GAME));
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) return null;
  return Decrypt(accessToken, ACCESS_TOKEN_KEY);
  // return window.localStorage.getItem("MEGA_ACCESS_TOKEN");
};
export const getAccessTokenGame = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY_GAME);
  if (!accessToken) return null;
  return Decrypt(accessToken, ACCESS_TOKEN_KEY_GAME);
};

export const setScopes = (scopes: any) => {
  localStorage.setItem(SCOPES_KEY, Encrypt(JSON.stringify(scopes), SCOPES_KEY));
};

export const checkScope = (scope: string) => {
  const scopesData = localStorage.getItem(SCOPES_KEY);
  if (!scopesData) return null;
  var scopes = JSON.parse(Decrypt(scopesData, SCOPES_KEY));
  return scopes.indexOf(scope) >= 0;
};

export const Encrypt = (message: any, privateKey: any) => CryptoJS.AES.encrypt(message, privateKey).toString();

export const Decrypt = (ciphertext: any, privateKey: any) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
