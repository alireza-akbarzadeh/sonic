import React from "react";
import { Logo, ModeToggle } from "@/components/common";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export async function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <Logo />
      <div className="flex items-center space-x-4">
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
