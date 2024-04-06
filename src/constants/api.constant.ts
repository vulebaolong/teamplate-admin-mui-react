export const ACCESS_TOKEN_KEY = import.meta.env.REACT_APP_ACCESS_TOKEN_KEY || "LouyiO1igij54zszbC7FlwRe0uxZ";
export const ACCESS_TOKEN_KEY_GAME = import.meta.env.REACT_APP_ACCESS_TOKEN_KEY_GAME || "LongiO1igijbao7FlwRe0ubaoxZ";
export const USER_WALLET_ADDRESS = import.meta.env.REACT_APP_USER_WALLET_ADDRESS || "LouyiO1igijbao7FlwRe0ulongxZ";
export const DEVICE_KEY = "uU5tEUmAgvBWArsv";
export const SCOPES_KEY = "AhBcmvr1EkMdPnL5";
export const hostname = window.location.hostname.replace("www.", "");
//setup environment
export let AppConfig: { WS: string; API: string; ETHERSCAN_LINK: string; API_GAME: string } = {
  WS: import.meta.env.REACT_APP_WS_URL ? import.meta.env.REACT_APP_WS_URL : "https://api.feliciastation.com",
  API: import.meta.env.REACT_APP_API_BASE_URL || `https://api-greenplannet.feliciastation.com`,
  API_GAME: import.meta.env.REACT_APP_API_BASE_URL_GAME || `https://greenplannet-game-be.feliciastation.com/api`,
  ETHERSCAN_LINK: "",
};

export const isProduction = import.meta.env.REACT_APP_IS_PRODUCTION ? import.meta.env.REACT_APP_IS_PRODUCTION : false;

export const domainCopy = "greenplanet.feliciastation.com/seedbox-ref";
