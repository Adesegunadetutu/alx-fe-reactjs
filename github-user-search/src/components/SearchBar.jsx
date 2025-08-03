export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <form onSubmit={onSearch} className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users"
        className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </form>
  );
}
