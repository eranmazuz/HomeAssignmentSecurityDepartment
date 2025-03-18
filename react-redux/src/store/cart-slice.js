import { configureStore, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'cart',
    initialState: { items: {}},
    reducers: {
        addItem(state, action) {
            const newProduct = action.payload
            if (newProduct)

        },
    }
});

export const action = counterSlice.actions