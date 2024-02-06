"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();
  const user = useUser();

  if (!isMounted) {
    return null;
  }


  function onOrders () {
    user.isSignedIn ? router.push('/orders') : router.push('/sign-in')
  }

  return ( 
    <div className="ml-auto flex items-center gap-x-4">

      <Button onClick={() => onOrders} className="flex items-center rounded-full bg-black px-4 py-2">
        <Link href={"/orders"} className="text-sm font-medium text-white">
          Mis pedidos
        </Link>
        </Button>

      <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
 
export default NavbarActions;