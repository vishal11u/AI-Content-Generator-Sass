import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-[85vh] w-full">
      <SignUp />
    </div>
  );
}
