"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function SignInBtn() {
  return (
    <Button
      color={`primary`}
      variant={`shadow`}
      as={Link}
      href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
    >
      Sign In
    </Button>
  );
}
