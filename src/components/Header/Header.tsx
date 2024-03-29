import dynamic from "next/dynamic";
import { Badge, Button, Spinner } from "@nextui-org/react";
import Link from "next/link";
import ThemeSwitcher from "./sub-components/ThemeSwitcher";
import NavDropdown from "./sub-components/NavDropdown";
const SearchComponent = dynamic(
  () => import("./sub-components/SearchComponent")
);
const SearchIconModal = dynamic(
  () => import("./sub-components/SearchIconModal")
);
import { FaShoppingCart } from "react-icons/fa";
import { auth, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import MagicBorder from "../AceternityComps/MagicBorder";
import Image from "next/image";

const Header = () => {
  const { userId }: { userId: string | null } = auth();
  console.log(userId);

  // const user = await currentUser();
  // console.log(user);

  console.log(`Server comp`);

  return (
    <header
      className={`sm:pb-4 border-b-small border-b-slate-500 flex flex-col justify-between gap-2`}
    >
      <div
        className={`flex justify-center items-center gap-2 p-2 text-[.7rem] sm:text-[.9rem] text-white bg-gradient-to-r from-black to-blue-900`}
      >
        <p className={``}>
          Free delivery for orders above{" "}
          <span className={`text-green-400 font-bold`}>₹10,000</span>
        </p>
        <MagicBorder href={`/products`} size={`sm`} className={`text-[.75rem]`}>
          Shop 🎁
        </MagicBorder>
      </div>

      {/* Navbar */}
      <nav className={`sm:px-[5vw] py-2 px-1`}>
        <ul role="navigation" className={`flex justify-between items-center`}>
          {/* Branding */}
          <li key={`branding `}>
            <Link href={`/`} className={`flex gap-1 items-center`}>
              <Image
                src={`/Brand_Logo/Brand_Logo.png`}
                width={40}
                height={40}
                alt={`Brand Logo`}
              ></Image>
              <h2 className={`text-xl font-bold hidden sm:block`}>Flashbyte</h2>
            </Link>
          </li>

          {/* Search Box */}
          <li
            className={`hidden md:block rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-offset-3  focus-within:ring-offset-white dark:focus-within:ring-offset-black focus-within:ring-blue-400 shadow-md shadow-blue-500/100 dark:shadow-blue-500/50`}
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
            className={`flex items-center flex-row-reverse gap-2`}
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
              <Button
                color={`primary`}
                variant={`shadow`}
                as={Link}
                href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
              >
                Sign In
              </Button>
            )}

            <ThemeSwitcher />

            <SearchIconModal />

            {/* Cart Icon */}
            <Badge
              content={0}
              color={`danger`}
              className={`mr-1 cursor-pointer`}
              showOutline={false}
              placement={`top-right`}
            >
              <Button
                isIconOnly
                as={Link}
                href={`/cart`}
                variant={`flat`}
                color={`default`}
                className={`mr-1`}
              >
                <FaShoppingCart className={`cursor-pointer text-xl`} />
              </Button>
            </Badge>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
