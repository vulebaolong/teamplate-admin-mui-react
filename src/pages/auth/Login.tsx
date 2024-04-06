import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
   Box,
   Button,
   IconButton,
   InputAdornment,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { MouseEvent, useState } from "react";
import * as Yup from "yup";
import Logo from "../../common/logo/Logo";
import { useAppSelector } from "../../store/store";
import { post } from "../../api/api";
import { ENDPOINT } from "../../constants/endpoint.contant";
import { setAccessToken } from "../../api/auth";
import { TLoginSuccessResponse } from "../../types/response/account";
import { ROUTES } from "../../constants/routes.contants";
import { navigate } from "../../helpers/navigate.helpler";
import { toast } from "react-toastify";

export default function Login() {
   const { mode } = useAppSelector((state) => state.setting);

   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [showPassword, setShowPassword] = useState(false);

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
   };

   const loginForm = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: Yup.object().shape({
         email: Yup.string().required("Email is required.").email("Email invalidate."),
         password: Yup.string().required("Password is required."),
      }),
      onSubmit: async (valuesRaw) => {
         if (isLoading) return;

         const payload = {
            email: valuesRaw.email,
            password: valuesRaw.password,
         };
         console.log(payload);

         setIsLoading(true);
         post(
            ENDPOINT.ACCOUNT.LOGIN(),
            payload,
            (data: TLoginSuccessResponse) => {
               delete data.password;
               console.log(data);

               setAccessToken(data.token);

               //   dispatch(getInfomationMID());

               navigate(ROUTES.ADMIN.HOME());
            },
            (error) => {
               console.log(error);
               /**
                * Handle error messages from bad requests:
                * - If 'message' key is missing in the error object, execute default case.
                * - If 'message' matches specific texts ('Invalid email / password'), toast accordingly.
                */
               switch (error.message) {
                  case `Invalid email / password`:
                  case `ivalid email/password`:
                     toast.error(`Invalid email / password`);
                     break;

                  default:
                     toast.error(`Login unsuccessful!`);
                     break;
               }
            },
            () => {
               setIsLoading(false);
            }
         );
      },
   });

   return (
      <Stack
         sx={{
            filter: `drop-shadow(0px 3px 7px rgba(${
               mode === `dark` ? "255,255,255" : "0,0,0"
            }, 0.5))`,
         }}
      >
         <Box
            component="form"
            autoComplete="false"
            onSubmit={loginForm.handleSubmit}
            sx={{
               width: `500px`,
               gap: `30px`,
               padding: `50px`,
               borderRadius: `20px`,
               display: `flex`,
               flexDirection: `column`,
               border: `1px solid rgba(${mode === `dark` ? "255,255,255" : "0,0,0"}, 0.2)`,
            }}
         >
            <Stack
               sx={{
                  width: `100%`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
               }}
            >
               <Logo sx={{ width: `180px` }} animation />
            </Stack>

            <Typography sx={{ fontWeight: `700`, textAlign: `center`, fontSize: `20px` }}>
               Sign in to GreenPlanet Admin
            </Typography>

            <Stack sx={{ gap: `10px` }}>
               <TextField
                  label={`Email`}
                  name={`email`}
                  variant={`outlined`}
                  // placeholder={`Email address`}
                  value={loginForm.values.email}
                  onChange={loginForm.handleChange}
                  error={loginForm.touched.email && loginForm.errors.email !== undefined}
                  helperText={loginForm.touched.email && loginForm.errors.email}
               />
               <TextField
                  label={`Password`}
                  name={`password`}
                  type={`password`}
                  variant={`outlined`}
                  // placeholder={`Password`}
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  error={loginForm.touched.password && loginForm.errors.password !== undefined}
                  helperText={loginForm.touched.password && loginForm.errors.password}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="start">
                           <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                           >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />
            </Stack>

            <Button type={`submit`} variant="contained" size="large">
               Login
            </Button>
         </Box>
      </Stack>
   );
}
