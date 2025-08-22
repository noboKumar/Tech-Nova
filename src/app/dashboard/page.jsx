import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { FiUser, FiSettings, FiPackage } from "react-icons/fi";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome, {session.user.name || "User"}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition cursor-pointer">
          <FiUser className="text-3xl text-blue-500" />
          <div>
            <h2 className="font-semibold text-lg">Profile</h2>
            <p className="text-gray-500">View and edit your profile</p>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-lg shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition cursor-pointer">
          <FiPackage className="text-3xl text-green-500" />
          <div>
            <h2 className="font-semibold text-lg">Orders</h2>
            <p className="text-gray-500">Check your recent orders</p>
          </div>
        </div>

        {/* Settings Card */}
        <div className="bg-white rounded-lg shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition cursor-pointer">
          <FiSettings className="text-3xl text-yellow-500" />
          <div>
            <h2 className="font-semibold text-lg">Settings</h2>
            <p className="text-gray-500">Manage your preferences</p>
          </div>
        </div>
      </div>
    </main>
  );
}
