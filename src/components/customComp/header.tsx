import Link from "next/link";
import Image from "next/image";
import UserMenu from "./user-menu";
import { PenBox } from "lucide-react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="mx-auto flex items-center justify-between border-b-2 px-4 py-2 shadow-md">
      {/* <!-- logo --> */}
      <Link href={"/"} className="flex items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={150}
          height={60}
          className="h-16 w-auto"
        />
      </Link>

      {/* <!-- login and event button --> */}
      <div className="flex items-center gap-4">
        <Link href="/events?create=true">
          <Button variant={"default"} className="flex items-center gap-2">
            <PenBox size={18} />
            <span>Create Event</span>
          </Button>
        </Link>
        <SignedOut>
          <SignInButton forceRedirectUrl={"/dashboard"}>
            <Button variant={"outline"}>Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
