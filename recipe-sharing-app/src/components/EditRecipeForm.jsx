import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

export default function EditRecipeForm({ recipe, onClose }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ This is the expected line

    updateRecipe(recipe.id, { title, description });
    onClose(); // Close the form after update
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div>
        <label className="block font-semibold text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 mt-1"
          required
        />
      </div>
      <div>
        <label className="block font-semibold text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-3 py-2 mt-1"
          rows="4"
          required
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
