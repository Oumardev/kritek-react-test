import { useState, useEffect } from "react";
import { ProduitSemiFinit } from "@/types";

export const useProductSemiFinitForm = () => {

    const [product, setProduct] = useState<ProduitSemiFinit>({} as ProduitSemiFinit);
    const [quantite, setQuantite] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        setProduct((initProd) => ({ ...initProd, quantite, price }));
    }, [quantite])

    return {
        setProduct,
        setPrice,
        setQuantite,
        product
    }
}