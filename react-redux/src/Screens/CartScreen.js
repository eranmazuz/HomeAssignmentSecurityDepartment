import React, { useState, useCallback } from "react";
import { Autocomplete, TextField } from '@mui/material';
import { Button, Stack } from '@mui/material';
import CAPTIONS from '../Constants/captions';
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import ERRORS from "../Constants/errors";


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
        setProductAmount(parseInt(event.target.value))
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
                renderInput={(params) => <TextField {...params} error={!category} helperText= {!category ? ERRORS.REQUIRED: null} label={CAPTIONS.CATEGORIES}/>}
                inputValue={category}
                onInputChange={handleCategorySelect}
            />
            <TextField 
                label={CAPTIONS.PRODUCT_NAME} 
                variant='outlined'
                sx={{ width: 300 }}
                onChange={handleProductNameSet}
                error={!productName}
                helperText= {!productName ? ERRORS.REQUIRED: null}
            />
            <TextField 
                label={CAPTIONS.PRODUCT_AMOUNT} 
                variant='outlined' 
                sx={{ width: 300 }}
                onChange={handleProductAmountSet}
                error={!productAmount}
                helperText= {!productAmount ? ERRORS.REQUIRED: null}
                type="number"
            />
            <Button variant="contained" onClick={handleProductSave} disabled={!category || !productName || !productAmount}>{CAPTIONS.SAVE}</Button>
        </Stack>
    )
}

export default CartScreen