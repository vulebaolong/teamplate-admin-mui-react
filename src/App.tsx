import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "./api/auth";
import { setNavigate } from "./helpers/navigate.helpler";
import { getInfomationMID } from "./store/slices/user/user.slice";
import { useAppDispatch } from "./store/store";
import Router from "./routes/routes";

function App() {
   const isLogin = getAccessToken();
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   useEffect(() => {
      setNavigate(navigate);
   }, [navigate]);

   useEffect(() => {
      console.log("version 0.1 - Setup");
      if (isLogin) dispatch(getInfomationMID());
   }, []);
   return <Router />;
}

export default App;
