"use client";

// import dynamic from "next/dynamic";
import { Button, Input, Kbd } from "@nextui-org/react";
import { useRef, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Category from "./Category";
import { useRouter } from "next/navigation";
// const Category = dynamic(() => import("./Category"));

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

  const [query, setQuery] = useState(``);
  const router = useRouter();

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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
            <IoIosSearch className={`pointer-events-none text-lg`} />
          }
          endContent={
            <Kbd
              keys={["command"]}
              className={`pointer-events-none hidden text-lg md:block`}
            >
              k
            </Kbd>
          } // Remove pointer-events-none
        />

        <div>
          <Category className={categoryClasses} />
        </div>

        <Button
          isDisabled={query === ``}
          type={`submit`}
          color={`primary`}
          variant={`solid`}
          radius={`none`}
          size={`lg`}
          className={searchBtnClasses}
          onClick={() => router.push(`/search_results/${query}`)}
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchComponent;
