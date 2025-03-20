import {List, ListItemText, ListSubheader, Stack} from "@mui/material";
import {useSelector} from "react-redux";

const CartProductsList = () => {
    const products = useSelector(state => state.cart.items)
    console.log(products)
    return(
        <Stack direction='row' spacing={2} padding={2} flexWrap='wrap'>
            {
                Object.entries(products).map(([category, categoryProducts]) => (
                    <List subheader={<ListSubheader>{category}</ListSubheader>} key={category}>
                        {
                           Object.entries(categoryProducts).map(([productName, productAmount]) => (
                               <ListItemText key={productName} primary={`${productName} - ${productAmount}`}/>
                           ))
                        }
                    </List>
                ))
            }
        </Stack>
    )
}

export default CartProductsList