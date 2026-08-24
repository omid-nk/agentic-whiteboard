"use client";

import { useState } from "react";

import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    if (loading) return;

    try {
      setLoading(true);

      const supabase = createClient();

      const { error } = await supabase.auth.signOut();

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Logged out successfully");

      router.push("/");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="bg-primary text-light hover:bg-primary/90 cursor-pointer rounded-md px-4 py-2 text-sm transition-all disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Logout" : "Logout"}
    </button>
  );
}
