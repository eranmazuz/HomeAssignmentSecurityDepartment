import React, { useState, useCallback } from "react";
import { Autocomplete, TextField } from '@mui/material';
import { Button, Stack } from '@mui/material';
import CAPTIONS from '../Constants/captions';


const CATEGORIES = [
    { id: 1, label: 'abc' },
    { id: 2, label: 'def' },
    { id: 3, label: 'ghi' }

]
const CartScreen = () => {
    const handleSaveProduct = useCallback(() =>  {

    }, [])

    const [category, setCategory] = useState()
    const handleCategorySelect = useCallback((event, newCategory) => {
        setCategory(newCategory)
    }, [])

    const [productName, setProductName] = useState()
    const handleProductNameSet = useCallback((event) => {
        setProductName(event.target.value)
    }, [])

    const [productAmount, setProductAmount] = useState()
    const handleProductAmountSet = useCallback((event) => {
        setProductAmount(event.target.value)
    }, [])

    return (
        <Stack spacing={2} sx={{ padding: 2}} direction='row'>
            <Autocomplete
                options={CATEGORIES} 
                sx={{ width: 300 }} 
                renderInput={(params) => <TextField {...params} label={CAPTIONS.CATEGORIES}/>}
                onChange={handleCategorySelect}
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
            <Button variant="contained">{CAPTIONS.SAVE}</Button>


        </Stack>
    )
}

export default CartScreen