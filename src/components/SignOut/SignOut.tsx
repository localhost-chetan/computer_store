"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <Button
      variant={`solid`}
      color={`danger`}
      // fullWidth
      onClick={() =>
        signOut(() =>
          router.push(
            process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL as string,
          ),
        )
      }
    >
      Log Out
    </Button>
  );
};

export default SignOut;
