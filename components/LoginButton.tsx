"use client";

import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  const signIn = async () => {
    const supabase = createClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (!error && user) {
      router.replace("/dashboard");
      return;
    }

    await supabase.auth.signInWithOAuth({
  provider: "google",
  options: {
    redirectTo: `${window.location.origin}/dashboard`,
    queryParams: {
      prompt: "select_account",
    },
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