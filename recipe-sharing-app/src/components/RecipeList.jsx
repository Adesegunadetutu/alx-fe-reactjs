import { useRecipeStore } from '../store/useRecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-xl font-semibold">Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow-sm">
            <h3 className="text-lg font-bold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
