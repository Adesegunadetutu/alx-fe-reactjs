import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  if (!recipe) {
    return <p className="text-red-600">Recipe not found.</p>;
  }

  return (
    <div className="space-y-6">
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h2 className="text-2xl font-bold text-teal-700">{recipe.title}</h2>
          <p className="text-gray-700">{recipe.description}</p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600"
            >
              Edit
            </button>
            <DeleteRecipeButton id={recipe.id} onDeleted={() => navigate('/')} />
          </div>
        </>
      )}
    </div>
  );
}
