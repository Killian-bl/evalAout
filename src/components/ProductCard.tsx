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

    const mockProducts = [
        {
            id: 1,
            name: "Chaise design",
            price: 5,
            overview: "Chaise confortable en bois massif"
        },
        {
            id: 2,
            name: "Table en chêne",
            price: 15,
            overview: "Table solide pour votre salle à manger"
        },
        {
            id: 3,
            name: "Lampe vintage",
            price: 8,
            overview: "Lampe au style rétro pour éclairer votre pièce"
        }
    ];

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
                <AddCartButton product={mockProducts[0]} />
            </Card>
        </div>
    )
}

export default ProductCard;