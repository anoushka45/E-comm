"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for menu visibility

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        {/* Logo */}
        <Link href="/">
          <h1 className="md:text-4xl text-2xl font-bold">
            Urban<span className="text-primary">Aura</span>
          </h1>
        </Link>

        {/* Hamburger Menu for Small Screens */}
      
        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex gap-12 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link href={link.href} className="text-lg font-semibold text-primary">
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Cart Button */}
        <div className="flex divide-x border-r sm:border-l">
          <Button
            className="flex flex-col  gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            variant={"outline"}
            onClick={() => handleCartClick()}
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
          </Button>

          <button
          className="lg:hidden text-lg p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="text-gray-600">☰</span> {/* Simple Hamburger Icon */}
        </button>

        </div>
        
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      {isMenuOpen && (
        <div className="lg:hidden block mt-4 px-4 py-2 border-t">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link href={link.href} className="text-lg font-semibold text-primary block py-2">
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 block py-2 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
