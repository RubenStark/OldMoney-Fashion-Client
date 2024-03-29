"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product, ProductCart } from "@/types";
import useCart from "@/hooks/use-cart";
import IconButton from "./ui/icon-button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const sizes = data.sizes.map((size) => size.value);
  const cart = useCart();
  const [active, setActive] = useState(sizes[0]);

  const ProductCart: ProductCart = {
    ...data,
    size: active,
  };

  const onAddToCart = () => {
    cart.addItem(ProductCart);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Sizes:</h3>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <Button
                key={size}
                className={cn(
                  "bg-white text-black border border-black h-3 w-5 flex items-center justify-center",
                  active === size && "bg-black text-white"
                )}
                onClick={() => {
                  setActive(size);
                }}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
