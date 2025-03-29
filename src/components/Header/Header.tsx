import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";
import ThemeSwitcher from "./sub-components/ThemeSwitcher";
import NavDropdown from "./sub-components/NavDropdown";
const SearchComponent = dynamic(
  () => import("./sub-components/SearchComponent"),
);
const SearchIconModal = dynamic(
  () => import("./sub-components/SearchIconModal"),
);
import { auth, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Image from "next/image";
import CartIconComp from "../cart/CartIcons";
import Announcement from "./Announcement";
import SignInBtn from "./sub-components/SignInBtn";

const Header = () => {
  const { userId }: { userId: string | null } = auth();

  // const user = await currentUser();
  // console.log(user);

  return (
    <header
      className={`flex flex-col justify-between gap-2 border-b-small border-b-slate-500 sm:pb-4`}
    >
      <Announcement />

      {/* Navbar */}
      <nav className={`select-none px-1 py-2 sm:px-[5vw]`}>
        <ul role="navigation" className={`flex items-center justify-between`}>
          {/* Branding */}
          <li key={`branding `}>
            <Link href={`/`} className={`flex items-center gap-1`}>
              <Image
                src={`/Brand_Logo/Brand_Logo.png`}
                width={40}
                height={40}
                alt={`Brand Logo`}
                priority
              />
              <h2 className={`hidden text-xl font-bold sm:block`}>FlashByte</h2>
            </Link>
          </li>

          {/* Search Box */}
          <li
            className={`focus-within:ring-offset-3 hidden overflow-hidden rounded-xl shadow-md shadow-blue-500/100  focus-within:ring-4 focus-within:ring-blue-400 focus-within:ring-offset-white dark:shadow-blue-500/50 dark:focus-within:ring-offset-black lg:block`}
            key={`search`}
          >
            {/* Search Component */}
            <SearchComponent
              divClasses={`flex items-center justify-between overflow-hidden w-[50vw] `}
              categoryClasses={`hidden lg:block w-[15vw]`}
              inputAutofucs={true}
            />
          </li>

          {/* Auth */}
          <li
            key={`authentication`}
            className={`flex flex-row-reverse items-center gap-2`}
          >
            {userId ? (
              <>
                <ClerkLoading>
                  <Spinner color={`success`} />
                </ClerkLoading>

                <ClerkLoaded>
                  <NavDropdown />
                </ClerkLoaded>
              </>
            ) : (
              <SignInBtn />
            )}

            <ThemeSwitcher />

            <SearchIconModal />

            {/* Cart Icon */}
            <CartIconComp />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
