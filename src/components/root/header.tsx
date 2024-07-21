import React from "react";
import { Logo, ModeToggle } from "@/components/common";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { MenuItem, MobileMenu } from "@/components/root";

export async function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <Logo />
      <div className="hidden lg:block">
        <MenuItem />
      </div>
      <div className="flex items-center space-x-4">
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
        <ModeToggle />
        <SignedOut>
          <Button asChild>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
