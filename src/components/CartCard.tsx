import { Card, CardContent, Typography, Button } from "@mui/material";
import type { productType } from "../@types/ProductType";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    product: productType & { quantity?: number };
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
                <Typography variant="body2">
                    {product.overview}
                </Typography>

                {/* Sélecteur de quantité */}
                {onQuantityChange && (
                    <input
                        type="number"
                        min={1}
                        value={product.quantity ?? 1}
                        onChange={(e) => onQuantityChange(parseInt(e.target.value))}
                    />
                )}

                {/* Bouton Supprimer */}
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
                sx={{ backgroundColor: "black", color: "antiquewhite" }}
                onClick={() => navigate("/ProductDetails/" + product.id)}
            >
                Info
            </Button>
        </Card>
    );
};

export default CartCard;
