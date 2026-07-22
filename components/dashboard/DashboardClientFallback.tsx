"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import TaskiDashboard from "./TaskiDashboard";

export default function DashboardClientFallback() {
  const router = useRouter();
  const supabase = createClient();
  const [status, setStatus] = useState<{ loading: boolean; user?: any }>(
    { loading: true }
  );

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (!mounted) return;

        if (user && !error) {
          setStatus({ loading: false, user });
          return;
        }

        // Not authenticated on client either — redirect to home
        router.replace("/");
      } catch (e) {
        router.replace("/");
      }
    })();

    return () => {
      mounted = false;
    };
  }, [router, supabase]);

  if (status.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse text-slate-600">Loading dashboard…</div>
      </div>
    );
  }

  return <TaskiDashboard user={status.user} />;
}
