import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import LogoutButton from "@/components/auth/LogoutButton";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const displayName = user.user_metadata?.display_name || "User";

  return (
    <main className="bg-light border-dark/10 w-full rounded-lg border p-6 font-mono shadow">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-primary text-2xl font-bold">Dashboard</h1>

            <p className="text-dark/60 mt-1 text-sm">Welcome back!</p>
          </div>

          <LogoutButton />
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-primary/5 border-dark/10 rounded-lg border p-4">
            <p className="text-dark/50 text-xs">Username</p>

            <p className="text-dark mt-1 font-medium">{displayName}</p>
          </div>

          <div className="bg-primary/5 border-dark/10 rounded-lg border p-4">
            <p className="text-dark/50 text-xs">Email</p>

            <p className="text-dark mt-1 font-medium">{user.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
