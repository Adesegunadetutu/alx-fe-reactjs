import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/'); // Redirect to homepage after deletion
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
}
