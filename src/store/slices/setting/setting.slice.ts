import { createSlice } from "@reduxjs/toolkit";
import { THEME } from "../../../constants/app.constant";
import { TSettingInitialState } from "./setting.type";
import { PaletteMode } from "@mui/material";


const initialState: TSettingInitialState = {
   mode: localStorage.getItem(THEME) as  PaletteMode || `light`,
};

const setting = createSlice({
   name: `setting`,
   initialState,
   reducers: {
      SET_MODE: (state, { payload }) => {
         localStorage.setItem(THEME, payload)
        
         state.mode = payload;
      },
   },
});

export const { SET_MODE } = setting.actions;

export default setting.reducer;
