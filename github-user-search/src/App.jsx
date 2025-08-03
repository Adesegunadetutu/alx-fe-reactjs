import { useState } from "react";
import { searchUsers } from "./services/github";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const data = await searchUsers(query);
      setResults(data.items || []);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users"
          className="p-2 border rounded w-full"
        />
      </form>

      <ul>
        {results.map((user) => (
          <li key={user.id} className="mb-2 p-2 bg-white shadow rounded">
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <div className="flex items-center gap-4">
                <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                <span>{user.login}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
