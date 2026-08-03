import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { choosePlan, getPlans, type Plan } from "../../services/planService";

function Plans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [choosingPlanId, setChoosingPlanId] = useState<number | null>(null);
  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const data = await getPlans();
      setPlans(data);
    } catch {
      toast.error("Failed to load plans");
    } finally {
      setLoading(false);
    }
  };
  const handleChoosePlan = async (planId: number) => {
    try {
      setChoosingPlanId(planId);

      const data = await choosePlan(planId);

      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to choose plan");
    } finally {
      setChoosingPlanId(null);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Loading plans...</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-2 text-3xl font-bold">Subscription Plans</h1>

      <p className="mb-8 text-gray-600">
        Choose the plan that works best for you.
      </p>

      {plans.length === 0 ? (
        <p>No plans are available.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold">{plan.name}</h2>

              <p className="mt-3 min-h-12 text-gray-600">{plan.description}</p>

              <div className="my-6">
                <span className="text-3xl font-bold">₹{plan.price}</span>

                <span className="text-gray-500">/{plan.duration}</span>
              </div>
              <button
                type="button"
                onClick={() => handleChoosePlan(plan.id)}
                disabled={choosingPlanId !== null}
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {choosingPlanId === plan.id ? "Choosing..." : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Plans;
