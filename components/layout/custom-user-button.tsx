"use client";

import { UserButton } from "@clerk/nextjs";
import { HistoryIcon } from "lucide-react";

export const CustomUserButton = () => {
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Link
          label="History"
          labelIcon={<HistoryIcon size={14} />}
          href="/history"
        />
      </UserButton.MenuItems>
    </UserButton>
  );
};
