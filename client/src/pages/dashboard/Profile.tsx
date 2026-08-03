import { useAuth } from "../../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">
          User information is not available.
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        My Profile
      </h1>

      <div className="max-w-xl rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-5">
          <p className="text-sm text-gray-500">
            Name
          </p>

          <p className="text-lg font-semibold">
            {user.name}
          </p>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500">
            Email
          </p>

          <p className="text-lg font-semibold">
            {user.email}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Role
          </p>

          <p className="text-lg font-semibold">
            {user.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;