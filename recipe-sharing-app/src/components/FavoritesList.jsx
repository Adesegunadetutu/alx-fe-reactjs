import { useRecipeStore } from '../components/recipeStore';

const FavoritesList = () => {
  const { favorites, recipes } = useRecipeStore();

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Your Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded mb-4">
            <h3 className="text-lg font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
