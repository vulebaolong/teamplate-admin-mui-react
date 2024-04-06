import { Box } from "@mui/material";
import { ROUTES } from "../../constants/routes.contants";
import { navigate } from "../../helpers/navigate.helpler";

export default function Logo({ disabledLink = false, sx = {}, animation = false }) {

   const logo = animation ? (
      <Box
         sx={{
            maxWidth: "100%",
            position: "relative",
            ...sx,
         }}
      >
         <Box
            sx={{
               position: "absolute",
               top: "0",
               left: "0",
               width: "100%",
               height: "100%",
               maskImage: "url('/logo.png')",
               maskSize: "100%",
               scale: "1.03",
            }}
         >
            <Box
               className={"rotateBorder"}
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transformOrigin: "left center",
                  width: "100%",
                  height: "40%",
                  background:
                     "linear-gradient(0deg, rgba(255,255,255,0) 0%, #9eff91 49%, rgba(255,255,255,0) 100%)",
               }}
            ></Box>
         </Box>

         <Box
            component={"img"}
            sx={{ width: "100%", height: "100%", position: "relative" }}
            src="/logo.png"
            alt="/logo.png"
         />
      </Box>
   ) : (
      <Box component="img" src={"/logo.png"} sx={{ ...sx, maxWidth: "100%" }} alt="logo.png" />
   );

   if (disabledLink) {
      return <>{logo}</>;
   }

   const handleClickLogo = () => {
      navigate(ROUTES.HOME);
   };

   return (
      <Box onClick={handleClickLogo} sx={{ cursor: "pointer" }}>
         {logo}
      </Box>
   );
}
