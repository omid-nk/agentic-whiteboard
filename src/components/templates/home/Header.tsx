import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function Header() {
  return (
    <header className="absolute top-0 right-0 left-0 mx-auto my-2 flex max-w-7xl items-center justify-between gap-12 px-3 py-3 select-none sm:px-6">
      {/* logo */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9">
          <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
        </div>
        <h1 className="font-mono text-lg font-semibold tracking-wider">
          Whiteboard
        </h1>
      </div>

      {/* nav */}
      <ul className="text-dark/80 *:hover:text-dark hidden items-center gap-8 text-sm lg:flex">
        <li>
          <a href="#workspace">Workspace</a>
        </li>
        <li>
          <a href="#workflow">Workflow</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
      </ul>

      {/* actions */}
      <div className="flex items-center gap-6 text-sm [word-spacing:-4px]">
        <Link href={"/login"}>Sign in</Link>

        <Link
          href={"/register"}
          className="bg-dark hover:bg-dark/95 text-light hidden items-center gap-1.5 rounded-md px-3.5 py-2.5 font-bold lg:flex"
        >
          Open dashboard
          <LuArrowRight className="size-4" />
        </Link>
      </div>
    </header>
  );
}
