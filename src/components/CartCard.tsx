import { Card, CardContent, Typography, Button, TextField } from "@mui/material";
import type { productType } from "../@types/ProductType";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    product: productType;
    onQuantityChange?: (newQuantity: number) => void;
    onRemove?: () => void;
}

const CartCard = ({ product, onQuantityChange, onRemove }: ProductCardProps) => {
    const navigate = useNavigate();

    return (
        <Card className="CardContainer">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>

                {product.overview && (
                    <Typography variant="body2">{product.overview}</Typography>
                )}

                {onQuantityChange && (
                    <TextField
                        type="number"
                        label="Quantité"
                        size="small"
                        inputProps={{ min: 1 }}
                        value={product.quantity ?? 1}
                        onChange={(e) => onQuantityChange(Number(e.target.value))}
                        sx={{ mt: 1, width: 100 }}
                    />
                )}

                {onRemove && (
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={onRemove}
                        sx={{ ml: 2 }}
                    >
                        Retirer
                    </Button>
                )}
            </CardContent>

            <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor: "black", color: "antiquewhite", mt: 1 }}
                onClick={() => navigate(`/ProductDetails/${product.id}`)}
            >
                Info
            </Button>
        </Card>
    );
};

export default CartCard;

