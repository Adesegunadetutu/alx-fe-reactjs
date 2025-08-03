import { useRecipeStore } from './recipeStore';

export default function SearchBar() {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search recipes..."
      className="w-full p-2 border border-gray-300 rounded mb-6"
    />
  );
}
