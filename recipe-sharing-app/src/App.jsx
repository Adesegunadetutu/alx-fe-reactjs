import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="min-h-screen bg-gray-500 px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-12">
          🍽 Recipe Sharing App
        </h1>

        <section className="mb-10">
          <AddRecipeForm />
        </section>

        <section>
          <RecipeList />
        </section>
      </div>
    </div>
  );
}

export default App;
