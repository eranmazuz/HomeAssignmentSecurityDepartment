import NewProductInput from "../components/newProductInput";
import {Stack} from "@mui/material";
import CartProductsList from "../components/cartProductsList";


const CartScreen = () => {
    return (
        <Stack>
            <NewProductInput/>
            <CartProductsList/>
        </Stack>
    )
}

export default CartScreen