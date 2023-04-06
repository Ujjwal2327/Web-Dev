const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value : 0
}

export const CounterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increament : (state)=>{
            state.value += 1;
        },
        decreament : (state)=>{
            state.value -= 1;
        }
    }
})

export const {increament, decreament} = CounterSlice.actions;

export default CounterSlice.reducer;