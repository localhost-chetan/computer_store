"use client";

import dynamic from "next/dynamic";
import { Button, Input, Kbd } from "@nextui-org/react";
import { useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
// import Category from "./Category";
const Category = dynamic(() => import("./Category"));

type PropTypes = {
  divClasses: string;
  searchBtnClasses?: string;
  categoryClasses: string;
  inputAutofucs: boolean;
};

const SearchComponent = ({
  divClasses,
  searchBtnClasses,
  categoryClasses,
  inputAutofucs,
}: PropTypes) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log(`Search comp`);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      event.ctrlKey &&
      event.key.toLowerCase() === "k" &&
      !event.altKey &&
      !event.metaKey
    ) {
      event.preventDefault();
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => {
      //UseEffect's cleanup function
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <form
      action={``}
      onSubmit={(event) => event.preventDefault()}
      name={`productSearch`}
    >
      <div className={divClasses}>
        <Input
          defaultValue={``}
          name={`product`}
          size={`lg`}
          autoFocus={inputAutofucs}
          ref={inputRef}
          className={`w-full grow outline-none`}
          type="search"
          radius={`none`}
          placeholder={`Search`}
          inputMode={`search`}
          startContent={
            <IoIosSearch className={`text-lg pointer-events-none`} />
          }
          endContent={
            <Kbd
              keys={["command"]}
              className={`hidden md:block pointer-events-none text-lg`}
            >
              k
            </Kbd>
          } // Remove pointer-events-none
        />

        <div>
          <Category className={categoryClasses} />
        </div>

        <Button
          type={`submit`}
          color={`primary`}
          variant={`solid`}
          radius={`none`}
          size={`lg`}
          className={searchBtnClasses}
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchComponent;
