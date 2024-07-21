import {
  Menu as MenuIcon,
  Home,
  Music,
  List,
  TrendingUp,
  User,
  LogIn,
  PlayIcon,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/common";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export async function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="cursor-pointer w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-start">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-2 text-lg"
              >
                <IconComponent className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <SignedIn>
            <Link
              href="/profile"
              className="flex items-center space-x-2 text-lg"
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className="flex items-center space-x-2 text-lg"
            >
              <LogIn className="w-5 h-5" />
              <span>Sign In</span>
            </Link>
          </SignedOut>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
