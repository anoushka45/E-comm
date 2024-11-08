"use client"
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  image: any;
  currency: string;
  id: string; // Ensure this is unique for each product in your catalog
}

export default function AddToBag({ id, currency, description, image, name, price }: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const imageUrl = image ? urlFor(image).url() : ""; // Fallback to an empty string if image is undefined

  const product = {
    id: id, // Use a consistent unique ID
    name: name,
    description: description,
    currency: currency,
    image: imageUrl,
    price: price,
  };

  return (
    <Button onClick={() => {
      addItem(product); // Adds the item or increases quantity if already in cart
      handleCartClick();
    }}>
      Add to cart
    </Button>
  );
}
