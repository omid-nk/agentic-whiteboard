export default function Workflow() {
  return (
    <section
      id="workflow"
      className="mx-auto flex max-w-7xl flex-col items-center gap-x-12 gap-y-6 px-3 py-22 sm:px-6 xl:flex-row"
    >
      <div className="w-full max-w-2xl xl:max-w-5/12">
        <p className="text-primary">Productive canvas</p>
        <h3 className="my-2 text-3xl/snug font-bold [word-spacing:-6px]">
          A landing place for the work before the work.
        </h3>
        <p className="text-dark/60 max-w-md text-sm">
          Capture discovery sessions, architecture ideas, product flows, and
          planning notes in a workspace that can reason with you.
        </p>
      </div>

      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-2 xl:max-w-7/12">
        <div className="border-dark/10 flex w-full flex-col gap-5 rounded-lg border bg-blue-50 p-3 sm:flex-row sm:items-center">
          <p className="bg-dark text-light flex h-8 w-8 items-center justify-center rounded-lg">
            1
          </p>
          <p>Start with a blank board or AI prompt</p>
        </div>
        <div className="border-dark/10 flex w-full flex-col gap-5 rounded-lg border bg-blue-50 p-3 sm:flex-row sm:items-center">
          <p className="bg-dark text-light flex h-8 w-8 items-center justify-center rounded-lg">
            2
          </p>
          <p>Turn rough thoughts into visual structure</p>
        </div>
        <div className="border-dark/10 flex w-full flex-col gap-5 rounded-lg border bg-blue-50 p-3 sm:flex-row sm:items-center">
          <p className="bg-dark text-light flex h-8 w-8 items-center justify-center rounded-lg">
            3
          </p>
          <p>Refine, archive, and revisit every project</p>
        </div>
      </div>
    </section>
  );
}
