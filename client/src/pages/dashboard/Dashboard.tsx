import { useEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";

import {
  getPlans,
  type Plan,
} from "../../services/planService";

function Dashboard() {
  const { user } = useAuth();

  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await getPlans();
        setPlans(data);
      } catch (error) {
        console.error("Failed to load plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-2 text-3xl font-bold">
        Welcome, {user?.name || "User"} 👋
      </h1>

      <p className="mb-8 text-gray-600">
        Manage your projects and subscription from one place.
      </p>

      <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Account
          </p>

          <h2 className="mt-2 text-xl font-bold">
            {user?.name}
          </h2>

          <p className="mt-1 text-gray-600">
            {user?.email}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Current Plan
          </p>

          <h2 className="mt-2 text-xl font-bold">
            No active plan
          </h2>

          <p className="mt-1 text-gray-600">
            Choose a subscription plan to get started.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Available Plans
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {loading ? "..." : plans.length}
          </h2>

          <p className="mt-1 text-gray-600">
            Plans currently available.
          </p>
        </div>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">
          Quick Overview
        </h2>

        <p className="text-gray-600">
          You can create and manage projects, view your
          profile, and choose a subscription plan from the
          sidebar.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;