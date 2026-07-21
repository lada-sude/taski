"use client";

import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LoginButton() {
  const signIn = async () => {
    const supabase = createClient();

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  return (
    <button
      onClick={signIn}
      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
    >
      Get Started
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}