"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { createClient } from "@/lib/supabase/client";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function RegisterPage() {
  const [userInput, setUserInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  async function submitRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    const username = userInput.trim();
    const email = emailInput.trim();
    const password = passInput;

    if (!username) {
      toast.error("Username can't be empty");
      return;
    }

    if (!email) {
      toast.error("Email can't be empty");
      return;
    }

    if (!password) {
      toast.error("Password can't be empty");
      return;
    }

    const usernameRegex = /^[a-zA-Z0-9_]+$/;

    if (!usernameRegex.test(username)) {
      toast.error("Username can only contain letters, numbers and underscores");
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

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: username,
          },
        },
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (!data.user) {
        toast.error("Something went wrong. Please try again.");
        return;
      }

      setEmailSent(true);
      toast.success("Confirmation email sent!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (emailSent) {
    return (
      <div className="bg-light border-dark/10 w-full rounded-lg border p-6 font-mono shadow">
        <h1 className="text-primary text-xl font-bold">Check your email</h1>

        <p className="text-dark/70 mt-4 text-sm leading-6">
          We sent a confirmation link to:
        </p>

        <p className="text-dark mt-1 font-bold">{emailInput}</p>

        <p className="text-dark/60 mt-4 text-sm leading-6">
          Please check your inbox and click the confirmation link to activate
          your account.
        </p>

        <Link
          href="/login"
          className="bg-primary text-light hover:bg-primary/90 mt-6 block w-full rounded-md py-2 text-center transition"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-light border-dark/10 w-full rounded-lg border p-6 font-mono shadow">
      <h1 className="text-primary text-xl font-bold">Register</h1>

      <form onSubmit={submitRegister} className="mt-6 space-y-3">
        {/* Username */}
        <div className="bg-primary/5 border-dark/10 rounded-md border px-3 py-2">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            id="username"
            placeholder="Username"
            autoComplete="username"
            className="text-dark w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>

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
            autoComplete="new-password"
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

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-light hover:bg-primary/90 mt-6 w-full cursor-pointer rounded-md px-2 py-2 transition-all disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Submit"}
        </button>

        <p className="text-dark/60 mt-1 text-center text-sm">
          already have an account?{" "}
          <Link className="text-primary hover:underline" href="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
