import { AppConfig } from "./api.constant";

export const ENDPOINT = {
  BASE: AppConfig.API,
  ACCOUNT: {
    LOGIN: () => `${ENDPOINT.BASE}/account/login`,
    REGISTER: () => `${ENDPOINT.BASE}/account/register`,
    UPDATE_WALLET: () => `${ENDPOINT.BASE}/account/wallet`,
    INFO: () => `${ENDPOINT.BASE}/account/info`,
    DASHBOARD: () => `${ENDPOINT.BASE}/account/dashboard`,
    SEND_OTP: () => `${ENDPOINT.BASE}/account/sendotp`,
    CHANGE_PASSWORD: () => `${ENDPOINT.BASE}/account/changepassword`,
    FORGOT_PASSWORD: () => `${ENDPOINT.BASE}/account/resetpassword`,
  },
  BALANCE: {
    DETAIL: () => `${ENDPOINT.BASE}/balance/detail`,
    WITHDRAWL: () => `${ENDPOINT.BASE}/balance/withdrawal`,
    BALANCE_LOG: () => `${ENDPOINT.BASE}/balance/logs`,
  },
  SEED: {
    SEED_DETAIL: (id: string) => `${ENDPOINT.BASE}/seed/detail/${id}`,
    SEED_LIST: () => `${ENDPOINT.BASE}/seed/list`,

    ORDER_ACTION: () => `${ENDPOINT.BASE}/seed/order`,
    ORDER_DETAIL: (id: string) => `${ENDPOINT.BASE}/seed/order/${id}`,
    ORDER_LIST: () => `${ENDPOINT.BASE}/seed/order/list`,
  },
  GET_PROFILE: () => `${ENDPOINT.BASE}/user/profile`,
  GET_MY_ITEM: () => `${ENDPOINT.BASE}/game/rooms`,
};

export const ENDPOINT_GAME = {
  BASE: AppConfig.API_GAME,
  AUTH: {
    LOGIN_AS_USER: () => `${ENDPOINT_GAME.BASE}/auth/login-as-user`,
    LOGIN_AS_AMIN: () => `${ENDPOINT_GAME.BASE}/auth/login-as-admin`,
  },
  SEED: {
    UNBOX: () => `${ENDPOINT_GAME.BASE}/seed/unbox`,
  },
  NFT: {
    LIST: () => `${ENDPOINT_GAME.BASE}/nft`,
  },
};
