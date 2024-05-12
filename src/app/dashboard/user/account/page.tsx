"use client";

import { useClerk } from "@clerk/nextjs";
import { Button, Input, Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { toast } from "sonner";

const ProfileInfo = () => {
  const { user } = useClerk();

  const [isDisabled, setIsDisabled] = useState(true);

  const handlePencilClick = () => {
    setIsDisabled(!isDisabled);
    if (isDisabled) {
      toast(`Now you can edit your profile information`);
    } else {
      toast.success(`You've successfully updated your profile information.`);
    }
  };

  return (
    <>
      <h2 className={`text-xl font-bold`}>Profile Information</h2>

      <div className={`relative mt-10 space-y-8`}>
        <Tooltip content={`Edit your profile information`}>
          <Button
            isIconOnly
            radius={`full`}
            className={`absolute right-2 top-2`}
            onClick={handlePencilClick}
          >
            <FaPencil size={15} />
          </Button>
        </Tooltip>

        <h4 className={`text-lg font-semibold`}>Edit Your Profile</h4>

        <form
          action={``}
          className={`grid-col-1 grid w-full gap-x-5 gap-y-8 sm:grid-cols-2`}
        >
          <Input
            placeholder={user?.firstName!}
            labelPlacement={`outside`}
            size={`lg`}
            variant={`faded`}
            color={`default`}
            label={`First Name`}
            isClearable
            radius={`sm`}
            isDisabled={isDisabled}
            className={`col-span-2 sm:col-span-1`}
          ></Input>

          <Input
            placeholder={user?.lastName!}
            labelPlacement={`outside`}
            size={`lg`}
            variant={`faded`}
            color={`default`}
            label={`last Name`}
            isClearable
            radius={`sm`}
            isDisabled={isDisabled}
            className={`col-span-2 sm:col-span-1`}
          ></Input>

          <Input
            placeholder={user?.emailAddresses?.at(0)?.toString()!}
            labelPlacement={`outside`}
            size={`lg`}
            variant={`faded`}
            color={`default`}
            label={`Email`}
            inputMode={`email`}
            isClearable
            radius={`sm`}
            isDisabled={isDisabled}
            className={`col-span-2 sm:col-span-1`}
          ></Input>

          <Input
            placeholder={user?.phoneNumbers?.at(0)?.toString()!}
            labelPlacement={`outside`}
            size={`lg`}
            variant={`faded`}
            color={`default`}
            label={`Phone Number`}
            inputMode={`numeric`}
            isClearable
            radius={`sm`}
            isDisabled={isDisabled}
            className={`col-span-2 sm:col-span-1`}
          ></Input>

          <div className={`col-span-2 space-y-1`}>
            <p className={`${isDisabled ? "text-zinc-500" : null}`}>
              Password Changes
            </p>
            <div className={`space-y-5`}>
              <Input
                placeholder={`Current Password`}
                size={`lg`}
                variant={`faded`}
                color={`default`}
                isClearable
                radius={`sm`}
                isDisabled={isDisabled}
                className={`col-span-2`}
              ></Input>

              <Input
                placeholder={`New Password`}
                size={`lg`}
                variant={`faded`}
                color={`default`}
                isClearable
                radius={`sm`}
                isDisabled={isDisabled}
                className={`col-span-2`}
              ></Input>

              <Input
                placeholder={`Confirm New Password`}
                size={`lg`}
                variant={`faded`}
                color={`default`}
                isClearable
                radius={`sm`}
                isDisabled={isDisabled}
                className={`col-span-2`}
              ></Input>
            </div>
          </div>

          <Button
            radius={`sm`}
            size={`lg`}
            variant={`shadow`}
            color={`primary`}
            isDisabled={isDisabled}
            className={`col-span-2 ml-auto max-w-fit`}
          >
            Save Changes
          </Button>
        </form>
      </div>
    </>
  );
};

export default ProfileInfo;
