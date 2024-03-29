import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <main className={`min-h-screen flex justify-center items-center`}>
      <Spinner color={`warning`} label={`Loading...`} size={`lg`} />
    </main>
  );
}
