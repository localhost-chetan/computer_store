"use client";

import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPowerOff, FaHeart } from "react-icons/fa";
import { useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { MdManageAccounts } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import Container from "@/components/Container";

const UserLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { signOut, user } = useClerk();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Container>
      <section
        className={`flex w-full flex-col justify-between lg:flex-row lg:justify-start`}
      >
        <div
          className={`flex h-full select-none items-center justify-between rounded-xl p-5 lg:flex-col lg:shadow-lg lg:shadow-gray-300 dark:lg:bg-[#1a1919] dark:lg:shadow-[#282828]`}
        >
          <div
            className={`flex w-full cursor-pointer items-center gap-3 lg:w-[16rem]`}
          >
            <Avatar
              size={`md`}
              src={user?.imageUrl}
              showFallback
              isBordered
              color={`success`}
            />

            <div className={`leading-none`}>
              <p className={`text-slate-500 dark:text-slate-400`}>Hello,</p>
              <p
                className={`text-xl font-semibold text-green-800 dark:text-green-400`}
              >
                {user?.firstName}
              </p>
            </div>
          </div>

          <div className={``}>
            {/* Mobile design */}
            <div className={`lg:hidden`}>
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly>
                    <GiHamburgerMenu />
                  </Button>
                </DropdownTrigger>

                <DropdownMenu aria-label={`user-managment`}>
                  {/* Manage my account */}
                  <DropdownItem
                    key={`Manage My Account`}
                    showDivider
                    textValue={`Manage My Account`}
                  >
                    <div className={`flex items-center gap-2`}>
                      <MdManageAccounts
                        size={30}
                        className={`basis-1/8 ${
                          pathname === "/dashboard/user/account" &&
                          "text-rose-400"
                        }`}
                      />
                      <h2 className={`text-xl font-bold`}>
                        <Link
                          href={`/dashboard/user/account`}
                          className={`${
                            pathname === "/dashboard/user/account" &&
                            "text-rose-400"
                          }`}
                        >
                          Manage My Account
                        </Link>
                      </h2>
                    </div>
                  </DropdownItem>

                  {/* My Order History */}
                  <DropdownItem
                    key={`Manage Orders`}
                    textValue={`Manage Orders`}
                  >
                    <div
                      className={`flex items-center gap-2 ${
                        (pathname === "/dashboard/user/orders" &&
                          "text-rose-400") ||
                        (pathname === "/dashboard/user/cancellations" &&
                          "text-rose-400") ||
                        (pathname === "/dashboard/user/reviews" &&
                          "text-rose-400")
                      }`}
                    >
                      <BsBagCheckFill size={30} className={`basis-1/8`} />
                      <h2 className={`text-xl font-bold`}>Manage Orders</h2>
                    </div>
                  </DropdownItem>

                  <DropdownItem key={`My Orders`} textValue={`My Orders`}>
                    <Link
                      href={`/dashboard/user/orders`}
                      className={`${
                        pathname === "/dashboard/user/orders" && "text-rose-400"
                      } ml-11`}
                    >
                      My Orders
                    </Link>
                  </DropdownItem>

                  <DropdownItem
                    key={`My Cancellations`}
                    textValue={`My Cancellations`}
                  >
                    <Link
                      href={`/dashboard/user/cancellations`}
                      className={`${
                        pathname === "/dashboard/user/cancellations" &&
                        "text-rose-400"
                      } ml-11`}
                    >
                      My Cancellations
                    </Link>
                  </DropdownItem>

                  <DropdownItem
                    key={`My Reviews`}
                    showDivider
                    textValue={`My Reviews`}
                  >
                    <Link
                      href={`/dashboard/user/reviews`}
                      className={`${
                        pathname === "/dashboard/user/reviews" &&
                        "text-rose-400"
                      } ml-11`}
                    >
                      My Reviews
                    </Link>
                  </DropdownItem>

                  {/* My Wishlist */}
                  <DropdownItem
                    key={`My Wishlist`}
                    showDivider
                    textValue={`My Wishlist`}
                  >
                    <div className={`flex items-center gap-2 py-2`}>
                      <Badge content={0} color={`danger`} showOutline={false}>
                        <FaHeart
                          size={30}
                          className={`basis-1/8 ${
                            pathname === "/dashboard/user/wishlist" &&
                            "text-rose-400"
                          }`}
                        />
                      </Badge>
                      <h2 className={`text-xl font-bold`}>
                        <Link
                          href={`/dashboard/user/wishlist`}
                          className={`${
                            pathname === "/dashboard/user/wishlist" &&
                            "text-rose-400"
                          }`}
                        >
                          My Wishlist
                        </Link>
                      </h2>
                    </div>
                  </DropdownItem>

                  {/* Log Out Button */}
                  <DropdownItem
                    key={`logout`}
                    color={`danger`}
                    textValue={`log out`}
                    startContent={
                      <FaPowerOff className={`text-lg font-bold`} />
                    }
                    onClick={() =>
                      signOut(() =>
                        router.push(
                          `${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL}`,
                        ),
                      )
                    }
                  >
                    <h2 className={`ml-2 text-xl font-bold`}>Logout</h2>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* Laptop design */}
            <div className={`mt-8 hidden space-y-6 lg:block`}>
              <div className={`flex items-center gap-2`}>
                <MdManageAccounts
                  size={30}
                  className={`basis-1/8 ${
                    pathname === "/dashboard/user/account" && "text-rose-400"
                  }`}
                />
                <h2 className={`grow text-xl font-bold`}>
                  <Link
                    href={`/dashboard/user/account`}
                    className={`${
                      pathname === "/dashboard/user/account" && "text-rose-400"
                    }`}
                  >
                    Manage My Account
                  </Link>
                </h2>
              </div>

              <div>
                <div
                  className={`flex items-center gap-2 ${
                    (pathname === "/dashboard/user/orders" &&
                      "text-rose-400") ||
                    (pathname === "/dashboard/user/cancellations" &&
                      "text-rose-400") ||
                    (pathname === "/dashboard/user/reviews" && "text-rose-400")
                  }`}
                >
                  <BsBagCheckFill size={30} className={`basis-1/8`} />
                  <h2 className={`grow text-xl font-bold`}>Manage Orders</h2>
                </div>

                <div className="mt-2 space-y-2 md:flex md:flex-col">
                  <Link
                    href={`/dashboard/user/orders`}
                    className={`${
                      pathname === "/dashboard/user/orders" &&
                      "font-bold text-rose-400"
                    } ml-11 font-semibold`}
                  >
                    My Orders
                  </Link>

                  <Link
                    href={`/dashboard/user/cancellations`}
                    className={`${
                      pathname === "/dashboard/user/cancellations" &&
                      "text-rose-400"
                    } ml-11`}
                  >
                    My Cancellations
                  </Link>

                  <Link
                    href={`/dashboard/user/reviews`}
                    className={`${
                      pathname === "/dashboard/user/reviews" && "text-rose-400"
                    } ml-11`}
                  >
                    My Reviews
                  </Link>
                </div>
              </div>

              <div className={`flex items-center gap-2`}>
                <Badge content={0} color={`danger`} showOutline={false}>
                  <FaHeart
                    size={30}
                    className={`basis-1/8 ${
                      pathname === "/dashboard/user/wishlist" && "text-rose-400"
                    }`}
                  />
                </Badge>
                <h2 className={`text-xl font-bold`}>
                  <Link
                    href={`/dashboard/user/wishlist`}
                    className={`${
                      pathname === "/dashboard/user/wishlist" && "text-rose-400"
                    }`}
                  >
                    My Wishlist
                  </Link>
                </h2>
              </div>

              <Button
                variant={`solid`}
                startContent={<FaPowerOff className={`text-lg font-bold`} />}
                color={`danger`}
                className={`text-xl font-bold`}
                onClick={() =>
                  signOut(() =>
                    router.push(
                      `${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL}`,
                    ),
                  )
                }
              >
                Log Out
              </Button>
            </div>
          </div>
        </div>

        <div className={`w-full p-6`}>{children}</div>
      </section>
    </Container>
  );
};

export default UserLayout;
