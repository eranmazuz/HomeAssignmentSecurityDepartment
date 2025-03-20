import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: {}, categories: []},
    reducers: {
        addItem(state, action) {
            const newProduct = action.payload
            console.log(action.payload)
            if (!(state.items[newProduct.category])){
                state.items[newProduct.category] = {}
            }

            if (!(state.items[newProduct.category][newProduct.name])){
                state.items[newProduct.category][newProduct.name] = 0
            }
            state.items[newProduct.category][newProduct.name] += newProduct.amount
        },
        setCategories(state, action) {
            state.categories = action.payload
        }
    }
});

export const cartActions = cartSlice.actions

export default cartSlice