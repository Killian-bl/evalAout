import {useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import {CardContent, Typography} from "@mui/material";
import type {productType} from "../@types/ProductType";
import AddCartButton from "./button/AddCartButton.tsx";

interface ProductCardProps {
    product: productType;
}

const ProductCard = ({product}: ProductCardProps) => {
    const navigate = useNavigate();


    return (
        <div>
            <Card className="CardContainer">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <div className={"description"}>
                        <Typography variant="body2">
                            {product.overview}
                        </Typography>
                    </div>
                </CardContent>
                <Button variant="contained" size="small" sx={{backgroundColor: 'black', color: 'antiquewhite'}}
                        onClick={() => navigate('/ProductDetails/' + product.id)}>Info</Button>
                <AddCartButton product={product} />
            </Card>
        </div>
    )
}

export default ProductCard;