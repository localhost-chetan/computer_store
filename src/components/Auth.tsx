import { SignIn, SignUp } from "@clerk/nextjs";

const SignUpComp = () => {
  return (
    <SignUp afterSignUpUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL} />
  );
};

const SignInComp = () => {
  return (
    <SignIn afterSignInUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL} />
  );
};

export { SignUpComp, SignInComp };
