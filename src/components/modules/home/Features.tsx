import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function Features() {
  return (
    <section
      id="features"
      className="border-dark/10 border-t bg-blue-50 px-3 sm:px-6"
    >
      <div className="mx-auto max-w-7xl py-22">
        <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
          <div>
            <p className="text-primary">Capabilities</p>
            <h3 className="mt-2 max-w-2xl text-2xl font-bold [word-spacing:-6px] lg:text-3xl/snug">
              Everything on the board can become the next useful artifact.
            </h3>
          </div>
          <Link
            href={"/dashboard"}
            className="border-dark/20 bg-light hover:border-dark/40 mt-8 flex items-center gap-1 rounded-lg border px-3 py-2"
          >
            Open dashboard
            <LuArrowRight className="size-4" />
          </Link>
        </div>
        <div className="*:bg-light *:border-dark/10 mt-8 flex flex-col gap-x-6 gap-y-2 *:w-full *:rounded-lg *:border *:p-8 md:flex-row *:md:max-w-lg">
          <div>
            <h3 className="mb-3 font-bold">Think with an AI partner</h3>
            <p>
              Ask for diagrams, summaries, next steps, and structured plans
              without leaving the canvas.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-bold">Organize messy ideas</h3>
            <p>
              Group sketches, notes, flows, and references into boards that stay
              readable as work grows.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-bold">Move from prompt to board</h3>
            <p>
              Capture strategy sessions, product flows, and research threads as
              visual working documents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
