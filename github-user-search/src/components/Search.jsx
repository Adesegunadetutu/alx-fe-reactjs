import { useState } from "react";
import { searchGitHubUsers, fetchUserData } from "../services/github";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const results = await searchGitHubUsers({ username, location, minRepos });

      // Fetch additional details for each user
      const detailedResults = await Promise.all(
        results.map(async (user) => {
          const details = await fetchUserData(user.login);
          return { ...user, ...details };
        })
      );

      setUsers(detailedResults);
    } catch (error) {
      console.error("Search failed:", error);
      setUsers([]);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold">Advanced GitHub User Search</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <div className="flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-600"
                >
                  {user.login}
                </a>
                <p className="text-sm text-gray-600">
                  Location: {user.location || "Not specified"}
                </p>
                <p className="text-sm text-gray-600">
                  Public Repos: {user.public_repos ?? "N/A"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
