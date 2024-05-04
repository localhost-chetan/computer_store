"use client";

import { Button, Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type={`submit`}
      color={`primary`}
      variant={`shadow`}
      radius={`sm`}
      size={`md`}
      isDisabled={pending}
      className={`col-span-2 w-full px-5 sm:w-52 md:w-full lg:w-52`}
    >
      {pending ? (
        <div className={`flex items-center gap-x-1`}>
          <span>Sending</span>
          <Spinner color={`white`} size={`sm`} />
        </div>
      ) : (
        `Send Message`
      )}
    </Button>
  );
}
