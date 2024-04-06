import { ROUTES } from "../constants/routes.contants"; 
import { NavigateFunction, NavigateOptions, To } from "react-router-dom";

let navigateFunction: NavigateFunction;

export let navigate = (to: To | number, options?: NavigateOptions) => {
  if (to === ROUTES.HOME) {
    window.open(to, "_self");
    return;
  }

  if (typeof to === "number") {
    navigateFunction(to);
    return;
  }

  navigateFunction(to, options);
};

export const setNavigate = (navigateSet: NavigateFunction) => {
  navigateFunction = navigateSet;
};
