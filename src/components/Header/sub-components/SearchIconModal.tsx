"use client";

import dynamic from "next/dynamic";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
const SearchComponent = dynamic(() => import("./SearchComponent"));
import { IoIosSearch } from "react-icons/io";

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
        <IoIosSearch className={`font-bold text-xl`} />
      </Button>

      <Modal
        placement={`center`}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={`p-4`}
      >
        <ModalContent>
          {(_onClose) => (
            <>
              <ModalHeader className={`text-center p-2`}>
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

//  <Button
//               isIconOnly
//               onClick={onOpen}
//               size={`sm`}
//               radius={`full`}
//               className={`md:hidden`}
//             >
//               <IoIosSearch className={`font-bold text-xl`} />
//             </Button>

//            <Modal
//               placement={`center`}
//               isOpen={isOpen}
//               onOpenChange={onOpenChange}
//               className={`p-4`}
//             >
//               <ModalContent>
//                 {(onClose) => (
//                   <>
//                     <ModalHeader className={`text-center p-2`}>
//                       What are you looking for?
//                     </ModalHeader>
//                     <ModalBody>
//                       {/* Search Component */}
//                       <SearchComponent
//                         divClasses={`flex flex-col items-stretch overflow-hidden `}
//                         categoryClasses={`w-vw border`}
//                         searchBtnClasses={`w-full`}
//                         inputAutofucs={false}
//                       />
//                     </ModalBody>
//                   </>
//                 )}
//               </ModalContent>
//             </Modal>
