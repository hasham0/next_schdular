"use client";
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-10 h-10",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          href={"/events"}
          label="My Event"
          labelIcon={<ChartNoAxesGantt size={15} />}
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserMenu;
