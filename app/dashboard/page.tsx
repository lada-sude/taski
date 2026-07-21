import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">
          Welcome, {user.user_metadata.full_name}
        </h1>

        <p className="mt-2 text-slate-600">
          {user.email}
        </p>

        {user.user_metadata.avatar_url && (
          <img
            src={user.user_metadata.avatar_url}
            alt="Profile"
            className="mt-6 h-20 w-20 rounded-full"
          />
        )}
      </div>
    </main>
  );
}