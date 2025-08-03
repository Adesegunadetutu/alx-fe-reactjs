import { useState } from "react";
import { searchUsers } from "./services/github";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const data = await searchUsers(query);
      setResults(data.items || []);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">
          🔎 GitHub User Search
        </h1>

        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

        <div>
          {results.length === 0 && query ? (
            <p className="text-center text-gray-500">No users found.</p>
          ) : (
            results.map((user) => <UserCard key={user.id} user={user} />)
          )}
        </div>
      </div>
    </div>
  );
}
