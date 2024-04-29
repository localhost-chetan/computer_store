"use client";

// import dynamic from "next/dynamic";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
// const SearchComponent = dynamic(() => import("./SearchComponent"));
import { IoIosSearch } from "react-icons/io";
import SearchComponent from "./SearchComponent";

const SearchIconModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  console.log(`search icon comp`);

  return (
    <>
      <Button
        isIconOnly
        onClick={onOpen}
        size={`sm`}
        radius={`full`}
        className={`lg:hidden`}
      >
        <IoIosSearch className={`text-xl font-bold`} />
      </Button>

      <Modal
        placement={`center`}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={`relative z-50 p-4`}
      >
        <ModalContent>
          {(_onClose) => (
            <>
              <ModalHeader className={`p-2 text-center`}>
                What are you looking for?
              </ModalHeader>
              <ModalBody>
                {/* Search Component */}
                <SearchComponent
                  divClasses={`flex flex-col items-stretch overflow-hidden `}
                  categoryClasses={`w-vw`}
                  searchBtnClasses={`w-full`}
                  inputAutofucs={false}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchIconModal;
