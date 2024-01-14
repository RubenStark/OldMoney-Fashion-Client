import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Button from "./ui/button";
import { Menu } from "lucide-react";
import MobileNav from "./mobile-nav";
import { useState } from "react";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <MobileNav data={categories} />

          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>

          <div className="hidden md:inline-block">
            <MainNav data={categories} />
          </div>

          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
