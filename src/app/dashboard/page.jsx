import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dashboard() {

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Welcome,</h1>
    </main>
  );
}
