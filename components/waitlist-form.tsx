"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  className?: string;
  size?: "default" | "large";
}

export function WaitlistForm({ className, size = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setState("success");
      } else {
        throw new Error("Failed");
      }
    } catch {
      setErrorMsg("Something went wrong. Try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 px-5 py-4 text-green-800",
          className
        )}
      >
        <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
        <div>
          <p className="font-semibold text-sm">You&apos;re on the list!</p>
          <p className="text-xs text-green-700 mt-0.5">
            We&apos;ll email you as soon as FieldDocs opens early access.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      <div
        className={cn(
          "flex flex-col sm:flex-row gap-3",
          size === "large" && "sm:gap-2"
        )}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.com"
          required
          className={cn(
            "flex-1 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition",
            size === "default" ? "py-3 text-sm" : "py-4 text-base"
          )}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 font-semibold text-white hover:bg-orange-700 active:scale-[0.98] transition-all disabled:opacity-60 shrink-0",
            size === "default" ? "px-5 py-3 text-sm" : "px-7 py-4 text-base"
          )}
        >
          {state === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      {(state === "error" || errorMsg) && (
        <p className="mt-2 text-sm text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}
