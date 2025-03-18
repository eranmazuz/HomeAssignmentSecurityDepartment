import { configureStore, createSlice} from '@reduxjs/toolkit'
import cartSlice from './cartSlice';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0},
    reducers: {
        increment(state, action) {
            state.counter++
        },
        decrement(state, action) {
            state.counter--
        },
        addBy(state, action) {
            state.counter+= action.payload
        }
    }
});

export const action = counterSlice.actions
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export default store;