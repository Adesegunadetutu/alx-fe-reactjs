import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-12">
          🍽 Recipe Sharing App
        </h1>

        <AddRecipeForm />
        <RecipeList />
        <FavoritesList />
        <RecommendationsList />
      </div>
    </div>
  );
}

export default App;
