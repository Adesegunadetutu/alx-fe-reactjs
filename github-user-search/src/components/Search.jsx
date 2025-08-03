// src/components/Search.jsx
import { useState } from "react";
import { searchGitHubUsers } from "../services/github";

export default function Search() {
  const [form, setForm] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const results = await searchGitHubUsers(form);
      setUsers(results);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            placeholder="Search by username"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="location">Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            placeholder="e.g. Lagos"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="minRepos">Minimum Repositories</label>
          <input
            name="minRepos"
            value={form.minRepos}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            placeholder="e.g. 10"
            type="number"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {users.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Results:</h2>
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="border p-4 rounded flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.login}</p>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
