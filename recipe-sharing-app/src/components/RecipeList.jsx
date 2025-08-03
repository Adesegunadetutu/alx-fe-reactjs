import { useRecipeStore } from '../components/recipeStore';

const RecipeList = () => {
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded mb-4">
          <h3 className="text-lg font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
            onClick={() => toggleFavorite(recipe.id)}
            className="mt-2 text-sm text-teal-600 hover:underline"
          >
            {favorites.includes(recipe.id) ? '💔 Remove Favorite' : '❤️ Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
