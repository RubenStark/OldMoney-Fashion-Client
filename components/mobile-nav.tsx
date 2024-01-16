"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import IconButton from "./ui/icon-button";

interface MobileNavProps {
  data: Category[];
}

const MobileNav: React.FC<MobileNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <div className="md:hidden">
        <Menu size={20} onClick={() => setOpen(!open)} />
      </div>

      {open && (
        <div className="absolute top-12 left-0 w-full py-4 bg-black z-100">
          <nav className="mx-6 flex flex-col items-start">
            <Dialog
              open={open}
              as="div"
              className="relative z-40 lg:hidden"
              onClose={onClose}
            >
              {/* Background color and opacity */}
              <div className="fixed inset-0 bg-black bg-opacity-25" />

              {/* Dialog position */}
              <div className="fixed inset-0 z-40 flex">
                <Dialog.Panel className="relative mr-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  {/* Close button */}
                  <div className="flex items-center justify-end px-4">
                    <IconButton icon={<X size={15} />} onClick={onClose} />
                  </div>

                  <div className="flex flex-col px-4">
                    {routes.map((route) => (
                      <Link
                        onClick={onClose}
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "font-medium transition-colors hover:text-black",
                          route.active ? "text-black" : "text-neutral-600"
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
