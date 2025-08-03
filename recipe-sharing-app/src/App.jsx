import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; // optional detail view

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-500 px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-teal-600 mb-12">
            🍽 Recipe Sharing App
          </h1>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="mb-10">
                    <AddRecipeForm />
                  </section>
                  <section>
                    <RecipeList />
                  </section>
                </>
              }
            />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
