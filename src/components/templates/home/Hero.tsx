import {
  LuBrainCircuit,
  LuArrowRight,
  LuChevronRight,
  LuBot,
  LuMousePointer2,
  LuPencilLine,
  LuWandSparkles,
  LuMessageSquareText,
  LuCheck,
} from "react-icons/lu";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="workspace"
      className="border-dark/15 min-h-dvh border bg-[linear-gradient(to_right,rgba(23,23,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.07)_1px,transparent_1px),linear-gradient(to_top,var(--color-blue-50),var(--color-white))] bg-size-[44px_44px,44px_44px,100%_100%]"
    >
      {/* divider */}
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-x-12 gap-y-8 p-4 px-3 py-18 sm:px-6 lg:py-28 2xl:flex-row 2xl:justify-between">
        {/* left */}
        <div className="flex w-full flex-col items-center p-2 2xl:w-5/12 2xl:items-start">
          <p className="text-primary bg-light border-primary/30 flex w-fit items-center gap-2 rounded-lg border px-3 py-2 text-center text-sm font-bold shadow sm:text-left">
            <LuBrainCircuit className="hidden size-4 sm:block" />
            Agentic canvas for ideas, systems, and strategy
          </p>
          <h2 className="mt-6 max-w-lg text-2xl/normal font-black tracking-wide [word-spacing:-4px] lg:text-4xl/normal 2xl:text-6xl/tight 2xl:[word-spacing:-16px]">
            Build clearer ideas on an AI whiteboard.
          </h2>
          <p className="text-dark/60 mt-3 max-w-lg text-base/relaxed">
            Agent Whiteboard helps teams turn rough thinking into structured
            diagrams, visual notes, and project boards with an AI collaborator
            built into the workspace.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={"/register"}
              className="bg-primary border-primary hover:bg-primary/95 text-light flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm font-bold shadow transition-all"
            >
              Create your first board
              <LuArrowRight className="size-5" />
            </Link>
            <Link
              href={"/register"}
              className="bg-light text-dark hover:border-dark/40 border-dark/20 flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm font-bold shadow transition-all"
            >
              View workspace
              <LuChevronRight className="size-5" />
            </Link>
          </div>
          <div className="mt-12 flex justify-start gap-8 2xl:justify-between">
            <div>
              <h3 className="text-xl font-bold">AI</h3>
              <p className="text-dark/60 mt-2 text-sm">assisted thinking</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">∞</h3>
              <p className="text-dark/60 mt-2 text-sm">canvas space</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">1</h3>
              <p className="text-dark/60 mt-2 text-sm">place for projects</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="outline-dark/10 relative hidden min-h-110 w-full max-w-2xl overflow-visible rounded-lg bg-white bg-[radial-gradient(circle,rgba(23,23,23,0.12)_1px,transparent_1px)] bg-size-[24px_24px] shadow-xl outline sm:block 2xl:w-7/12">
          {/* header */}
          <div className="border-dark/10 bg-light absolute top-0 right-0 left-0 z-50 flex w-full items-center justify-between rounded-t-lg border-b px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-300" />
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <p className="text-dark/60 border-dark/10 flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold">
              <LuBot className="text-primary size-3" />
              AI workspace active
            </p>
          </div>

          {/* sidebar tools */}
          <div className="bg-light border-dark/10 *:border-dark/10 *:text-dark/60 absolute top-0 bottom-0 left-0 z-30 flex flex-col gap-2 rounded-l-lg border-r px-2 py-16 *:size-8 *:rounded-lg *:bg-white *:p-1.5 *:shadow/5">
            <LuMousePointer2 />
            <LuPencilLine />
            <LuWandSparkles />
            <LuMessageSquareText />
          </div>

          {/* pop-up text */}
          <div className="bg-light border-dark/20 text-dark/60 absolute -bottom-4 left-10 z-30 rounded-lg border px-4 py-3 text-xs font-bold shadow">
            From sketch to structured plan
          </div>

          {/* center whiteboard */}
          <div className="relative mt-16 mr-3 mb-3 ml-16 flex items-center justify-center p-22">
            {/* center pop-up */}
            <div className="relative">
              {/* Top text box */}
              <div className="absolute -top-9 -right-26 z-0 rounded-lg bg-purple-100 px-5 py-3 text-sm font-bold text-purple-700">
                AI expands context
              </div>

              {/* Bottom text box */}
              <div className="absolute -bottom-9 -left-26 z-0 rounded-lg bg-sky-100 px-5 py-3 text-sm font-bold text-sky-700">
                Sketch the flow
              </div>

              {/* Main card */}
              <div className="bg-light border-primary/20 relative z-10 rounded-lg border p-6 shadow-lg">
                <h3 className="text-primary mb-2 text-sm font-bold">
                  AI synthesis
                </h3>

                <ul className="space-y-1 text-xs">
                  <li className="flex items-center gap-2">
                    <LuCheck className="size-3 text-emerald-500" />
                    Map the decision path
                  </li>

                  <li className="flex items-center gap-2">
                    <LuCheck className="size-3 text-emerald-500" />
                    Find missing assumptions
                  </li>

                  <li className="flex items-center gap-2">
                    <LuCheck className="size-3 text-emerald-500" />
                    Create next actions
                  </li>
                </ul>
              </div>
            </div>
            {/* bottom pop-up */}
            <div className="bg-light border-dark/10 absolute right-5 -bottom-5 left-5 flex items-center justify-between rounded-lg border px-3 py-2 shadow">
              <div className="text-xs">
                <p className="font-bold">Product strategy board</p>
                <p>18 elements, 4 AI-generated clusters</p>
              </div>
              <button className="bg-primary text-light flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm">
                Ask Ai
                <LuChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
