import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col sm:flex-row sm:w-3/4 items-center justify-center sm:justify-evenly">
        <Image
          src={"/kratos-wo-bg.png"}
          style={{ width: "auto" }}
          width={220}
          height={1000}
          alt="kratos-logo"
          priority
        />
        <SignIn />
      </div>
    </div>
  );
}
