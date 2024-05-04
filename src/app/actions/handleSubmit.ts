"use server";

import EmailTemplate from "@/components/email/email-template";
import { Resend } from "resend";
// import { toast } from "sonner";

export const handleSubmit = async (formData: FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      // from: "Acme <onboarding@resend.dev>",
      from: `Acme <onboarding@resend.dev>`,
      to: [formData.get("email") as string],
      subject: formData.get("subject") as string,
      react: EmailTemplate({
        firstName: formData.get("firstName") as string,
        message: formData.get("message") as string,
      }),
    });

    // toast.success("Message sent");

    console.log(data);

    return data;
  } catch (error) {
    // toast.error("Something went wrong");
    return error;
  }
};
