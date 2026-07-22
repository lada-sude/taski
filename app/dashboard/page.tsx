import TaskiDashboard from "@/components/dashboard/TaskiDashboard";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    const DashboardClientFallback = (
      await import("@/components/dashboard/DashboardClientFallback")
    ).default;

    return <DashboardClientFallback />;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <TaskiDashboard
      user={user}
      profile={profile}
    />
  );
}