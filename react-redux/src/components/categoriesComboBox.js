import {Autocomplete, TextField} from "@mui/material";
import ERRORS from "../Constants/errors";
import CAPTIONS from "../Constants/captions";
import React, {useCallback, useState} from "react";

const CategoriesComboBox = ({ category, setCategory}) => {

    const handleCategorySelect = useCallback((event, newCategory) => {
        setCategory(newCategory)
    }, [setCategory])

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const handleLoadCategories = useCallback(async () => {
        setLoading(true)
        console.log(process.env.REACT_APP_CATEGORIES_URL)
        const response = await fetch(process.env.REACT_APP_CATEGORIES_URL)
        const data = await response.json()
        setCategories(data)
        setLoading(false)

    }, [])

    return (
        <Autocomplete
            onOpen={handleLoadCategories}
            options={categories}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} error={!category} helperText= {!category ? ERRORS.REQUIRED: null} label={CAPTIONS.CATEGORIES}/>}
            onInputChange={handleCategorySelect}
            loading={loading}
            getOptionLabel={(option) => option.name}
        />
    )
}

export default CategoriesComboBox