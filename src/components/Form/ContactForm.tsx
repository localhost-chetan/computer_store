"use client";

import { handleSubmit } from "@/app/actions/handleSubmit";
import { Input, Textarea } from "@nextui-org/react";
import { SubmitButton } from "./SubmitBtn";
import { createRef, useRef } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmitClient = async (formData: FormData) => {
    const isData = await handleSubmit(formData);

    if (isData) {
      toast.success("Mesaage sent successfully ✔");
      formRef.current?.reset();
    } else {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <form
      ref={formRef}
      action={handleSubmitClient}
      className={`mt-10 grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2`}
    >
      {/* First Name */}
      <Input
        name={`firstName`}
        autoFocus
        placeholder={` `}
        isClearable
        isRequired
        inputMode={`text`}
        type={`text`}
        label={`First Name`}
        labelPlacement={`outside`}
        radius={`sm`}
        variant={`bordered`}
        className={`col-span-2 lg:col-span-1`}
      ></Input>

      {/* Last Name */}
      <Input
        name={`lastName`}
        placeholder={` `}
        isClearable
        isRequired
        type={`text`}
        label={`Last Name`}
        labelPlacement={`outside`}
        radius={`sm`}
        variant={`bordered`}
        inputMode={`text`}
        className={`col-span-2 lg:col-span-1`}
      ></Input>

      {/* Email */}
      <Input
        name={`email`}
        placeholder={` `}
        isClearable
        isRequired
        type={`email`}
        inputMode={`email`}
        label={`Email`}
        labelPlacement={`outside`}
        radius={`sm`}
        variant={`bordered`}
        className={`col-span-2`}
      ></Input>

      {/* Subject */}
      <Input
        name={`subject`}
        placeholder={` `}
        isClearable
        isRequired
        type={`text`}
        label={`Subject`}
        inputMode={`text`}
        labelPlacement={`outside`}
        radius={`sm`}
        variant={`bordered`}
        className={`col-span-2`}
      ></Input>

      {/* Message */}
      <Textarea
        name={`message`}
        minRows={4}
        maxRows={6}
        isRequired
        placeholder={` `}
        label={`Your Message`}
        type={`text`}
        inputMode={`text`}
        radius={`sm`}
        variant={`bordered`}
        labelPlacement={`outside`}
        className={`col-span-2`}
      ></Textarea>

      <SubmitButton />
    </form>
  );
};
export default ContactForm;
