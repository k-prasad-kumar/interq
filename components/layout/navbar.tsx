import Image from "next/image";
import { ModeToggle } from "../theme-toggle";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import logo from "@/assets/logo.webp";
import signin from "@/assets/signin.webp";
import { CustomUserButton } from "./custom-user-button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="w-full h-16 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-14 sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md">
      <nav className="w-full h-full flex justify-between items-center">
        <Link href="/" className="flex justify-center items-center gap-2">
          <Image
            src={logo}
            width={25}
            height={25}
            alt="signin"
            className="cursor-pointer"
          />
          <p className="text-xl font-semibold">InterQ</p>
        </Link>
        <div className="flex justify-center items-center">
          <SignedOut>
            <SignInButton>
              <Image
                src={signin}
                width={30}
                height={30}
                alt="signin"
                className="rounded-full cursor-pointer"
              />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <CustomUserButton />
          </SignedIn>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
