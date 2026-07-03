import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRandomColor } from "./CanvasAPI";

const initialState = {
  color: {
    code: "#000000",
    opacity: 1,
    status:'complete',
  },
  font: {
    size: 16,
    type: "Arial",
  },
};

// createSlice is a function to structure state
// and behaviour in one object. Takes an object
// of initial state and reducers along with name as identifier.
// Returns an object with actions and reducer to be used in store.
export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color.code = action.payload;
    },
    changeFontSize: (state, action) => {
      state.font.size = action.payload;
    },
    changeFont: (state, action) => {
      state.font.type = action.payload;
    },
    changeOpacity: (state, action) => {
      state.color.opacity = action.payload;
    },
  },
    extraReducers: (builder) => {
            builder.addCase(paintColorAsync.pending, (state)=>{
                state.color.status = 'loading';
            })
            .addCase(paintColorAsync.fulfilled, (state, action)=>{
                state.color.status = 'complete';
                state.color.code = action.payload;
            })
    },
});

export const paintColorAsync = createAsyncThunk(
    'canvas/fetchRandomColor',
    async () => {
        const response = await fetchRandomColor();
        return response.data;
    }
);

export const selectColor = (state) => state.canvas.color.code;
export const selectFontSize = (state) => state.canvas.font.size;
export const selectFont = (state) => state.canvas.font.type;
export const selectOpacity = (state) => state.canvas.color.opacity;
export const selectColorStatus = (state) => state.canvas.color.status;

export const { changeColor, changeFontSize, changeFont, changeOpacity } =
  canvasSlice.actions;
export default canvasSlice.reducer;
