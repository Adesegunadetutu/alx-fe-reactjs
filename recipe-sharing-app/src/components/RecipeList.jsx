import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const [editingId, setEditingId] = useState(null);

  if (recipes.length === 0) {
    return <p className="text-gray-500 text-center">No recipes added yet.</p>;
  }

  return (
    <div className="space-y-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border border-gray-300 rounded-md p-4 bg-gray-50"
        >
          {editingId === recipe.id ? (
            <EditRecipeForm
              recipe={recipe}
              onClose={() => setEditingId(null)}
            />
          ) : (
            <>
              <h2 className="text-xl font-semibold text-teal-700">
                <Link to={`/recipe/${recipe.id}`} className="hover:underline">
                  {recipe.title}
                </Link>
              </h2>
              <p className="text-gray-600">{recipe.description}</p>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => setEditingId(recipe.id)}
                  className="text-orange-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteRecipe(recipe.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
