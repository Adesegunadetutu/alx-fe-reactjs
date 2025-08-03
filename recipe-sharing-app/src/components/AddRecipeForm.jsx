import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-lg mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-semibold text-teal-700">Add a New Recipe</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        className="border border-gray-300 rounded p-2 w-full h-28 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
