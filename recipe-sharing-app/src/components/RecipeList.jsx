import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0) {
    return <p className="text-gray-500 text-center">No matching recipes found.</p>;
  }

  return (
    <div className="space-y-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border border-gray-300 rounded-md p-4 bg-gray-50"
        >
          <h2 className="text-xl font-semibold text-teal-700">
            <Link to={`/recipe/${recipe.id}`} className="hover:underline">
              {recipe.title}
            </Link>
          </h2>
          <p className="text-gray-600">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
