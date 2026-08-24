"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { LuEye, LuEyeOff } from "react-icons/lu";

import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();

  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    const email = emailInput.trim();
    const password = passInput;

    if (!email) {
      toast.error("Email can't be empty");
      return;
    }

    if (!password) {
      toast.error("Password can't be empty");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const supabase = createClient();

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        const message = error.message.toLowerCase();

        if (
          message.includes("email not confirmed") ||
          message.includes("email_not_confirmed")
        ) {
          toast.error("Please confirm your email before logging in.");

          return;
        }

        if (message.includes("invalid login credentials")) {
          toast.error("Invalid email or password.");
          return;
        }

        toast.error(error.message);
        return;
      }

      if (!data.user) {
        toast.error("Something went wrong. Please try again.");
        return;
      }

      toast.success("Welcome back!");

      router.push("/dashboard");
      router.refresh();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-light border-dark/10 w-full rounded-lg border p-6 font-mono shadow">
      <h1 className="text-primary text-xl font-bold">Login</h1>

      <form onSubmit={submitLogin} className="mt-6 space-y-3">
        {/* Email */}
        <div className="bg-primary/5 border-dark/10 rounded-md border px-3 py-2">
          <input
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="text-dark w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Password */}
        <div className="bg-primary/5 border-dark/10 flex items-center rounded-md border px-3 py-2">
          <input
            value={passInput}
            onChange={(e) => setPassInput(e.target.value)}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            autoComplete="current-password"
            className="text-dark w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />

          <button
            type="button"
            onClick={() => setShowPass((prev) => !prev)}
            className="text-dark/60 hover:text-primary ml-2 shrink-0 cursor-pointer transition-colors"
            aria-label={showPass ? "Hide password" : "Show password"}
          >
            {showPass ? (
              <LuEyeOff className="size-4" />
            ) : (
              <LuEye className="size-4" />
            )}
          </button>
        </div>

        {/* Forgot password */}
        <Link
          href="/reset-password"
          className="text-dark/60 hover:text-secondary/60 mb-2 block w-full text-right text-xs transition-all"
        >
          forgot password?
        </Link>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-light hover:bg-primary/90 mt-6 w-full cursor-pointer rounded-md px-2 py-2 transition-all disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Submit"}
        </button>

        {/* Register */}
        <p className="text-dark/60 mt-1 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link className="text-primary hover:underline" href="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
