import { Box, styled } from "@mui/material";

export const BoxText = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  border: "1px solid rgba(115, 47, 4, 0.30)",
  background: "var(--color-5)",
}));

export const noWrapTypography = (line: number) => {
  return {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: `${line}`,
    WebkitBoxOrient: "vertical",
  };
};

export const styleStackPage = {
  width: "100%",
  alignItems: "center",
  position: "relative",
  pt: "80px",
  animation: "fadeInUp 0.5s",
};
