export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="border-dark/15 flex min-h-dvh items-center justify-center bg-[linear-gradient(to_right,rgba(23,23,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.07)_1px,transparent_1px),linear-gradient(to_top,var(--color-blue-50),var(--color-white))] bg-size-[44px_44px,44px_44px,100%_100%]">
      <div className="w-full max-w-sm px-3 sm:px-6">{children}</div>
    </main>
  );
}
