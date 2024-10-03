import Link from "next/link";
import Image from "next/image";
import UserMenu from "./user-menu";
import { Button } from "../ui/button";
import { PenBox } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import checkUser from "@/lib/checkUser";

type Props = {};
const Header = async (props: Props) => {
  await checkUser();

  return (
    <nav className="mx-auto flex items-center justify-between border-b-2 px-4 py-2 shadow-md dark:bg-white">
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
          <Button
            variant={"default"}
            className="flex items-center gap-2 dark:border-2 dark:border-black/30"
          >
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
        {/* theme mode button */}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;
