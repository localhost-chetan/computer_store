"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaUser, FaHeart, FaPowerOff } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const NavDropdown = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const userProfileOptions:
    | {
        label: string;
        href: string;
        icon: React.ComponentType<any>;
      }[]
    | any = [
    { label: "Manage Account", href: "/dashboard/user", icon: FaUser },
    {
      label: "My Orders",
      href: "/dashboard/user/orders",
      icon: BsBagCheckFill,
    },
    { label: "My Wishlist", href: "/dashboard/user/wishlist", icon: FaHeart },
    {
      label: "My Cancellations",
      href: "/dashboard/user/cancellations",
      icon: MdCancel,
    },
    { label: "My Reviews", href: "/dashboard/user/reviews", icon: FaStar },
  ];

  console.log(`NavDropdown comp`);

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Avatar
            isBordered
            color={`success`}
            src={``}
            showFallback
            className={`cursor-pointer`}
          />
        </DropdownTrigger>

        <DropdownMenu aria-label={`profile-action`} variant={`shadow`}>
          {userProfileOptions.map((option: any) => (
            <DropdownItem
              key={option.label}
              startContent={<option.icon />} // Render the icon component directly
              onClick={() => router.push(option.href)}
            >
              {option.label}
            </DropdownItem>
          ))}

          {/* <Logout /> */}
          <DropdownItem
            key={`logout`}
            color={`danger`}
            startContent={<FaPowerOff />}
            onClick={() =>
              signOut(() =>
                router.push(
                  `${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL}`
                )
              )
            }
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default NavDropdown;
