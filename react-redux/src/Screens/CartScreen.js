import React, { useState, useCallback } from "react";
import { Autocomplete, TextField } from '@mui/material';
import { Button, Stack } from '@mui/material';
import CAPTIONS from '../Constants/captions';
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";


const CATEGORIES = [ 'abc', 'def', 'ghi']
const CartScreen = () => {
    const cartItems = useSelector((state) => state.cart.items)
    console.log(cartItems)
    const [category, setCategory] = useState('')
    const handleCategorySelect = useCallback((event, newCategory) => {
        setCategory(newCategory)
    }, [setCategory])

    const [productName, setProductName] = useState('')
    const handleProductNameSet = useCallback((event) => {
        setProductName(event.target.value)
    }, [setProductName])

    const [productAmount, setProductAmount] = useState(0)
    const handleProductAmountSet = useCallback((event) => {
        setProductAmount(event.target.value)
    }, [setProductAmount])

    const dispatch = useDispatch();
    const handleProductSave = useCallback(() =>  {

        dispatch(cartActions.addItem({
            category: category,
            name: productName,
            amount: productAmount
        }))
    }, [category, productName, productAmount])

    return (
        <Stack spacing={2} sx={{ padding: 2}} direction='row'>
            <Autocomplete
                options={CATEGORIES} 
                sx={{ width: 300 }} 
                renderInput={(params) => <TextField {...params} label={CAPTIONS.CATEGORIES}/>}
                inputValue={category}
                onInputChange={handleCategorySelect}
            />
            <TextField 
                label={CAPTIONS.PRODUCT_NAME} 
                variant='outlined'
                sx={{ width: 300 }}
                onChange={handleProductNameSet}
            />
            <TextField 
                label={CAPTIONS.PRODUCT_AMOUNT} 
                variant='outlined' 
                sx={{ width: 300 }}
                onChange={handleProductAmountSet}
            />
            <Button variant="contained" onClick={handleProductSave}>{CAPTIONS.SAVE}</Button>
        </Stack>
    )
}

export default CartScreen