import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    color:{
        code: '#000000',
        opacity: 1
    },
    font:{
        size: 16,
        type: 'Arial'
    }
}

// createSlice is a function to structure state
// and behaviour in one object. Takes an object
// of initial state and reducers along with name as identifier.
// Returns an object with actions and reducer to be used in store.
export const canvasSlice = createSlice({
    name:'canvas',
    initialState,
    reducers:{
        changeColor:(state, action)=>{
            state.color.code = action.payload;
        },
        changeFontSize:(state, action)=>{
            state.font.size = action.payload;
        },
        changeFont:(state, action)=>{
            state.font.type = action.payload;
        },
        changeOpacity:(state, action)=>{
            state.color.opacity = action.payload;
        }
    }
});

export const selectColor = state => state.canvas.color.code;
export const selectFontSize = state => state.canvas.font.size;
export const selectFont = state => state.canvas.font.type;
export const selectOpacity = state => state.canvas.color.opacity;

export const {changeColor, changeFontSize, changeFont, changeOpacity} = canvasSlice.actions;
export default canvasSlice.reducer;