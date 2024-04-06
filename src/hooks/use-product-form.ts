import { useState, useEffect } from "react";
import { Produit } from "@/types";

export const useProductForm = () => {

    const [product, setProduct] = useState<Produit>({} as Produit);
    const [quantity, setQuantity] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        setProduct((initProd) => ({ ...initProd, quantity, price }));
    }, [quantity])

    return {
        setProduct,
        setPrice,
        setQuantity,
        product
    }
}