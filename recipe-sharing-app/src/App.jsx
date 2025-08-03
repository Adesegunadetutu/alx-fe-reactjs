import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-teal-600 mb-10">
            🍽 Recipe Sharing App
          </h1>

          <Routes>
            <Route
              path="/"
              element={
                <>{/* Search Input */}
                  <section className="mb-6">
                    <input
                      type="text"
                      placeholder="Search recipes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </section>
                  {/* Add Recipe Form */}
                  <section className="mb-8">
                    <AddRecipeForm />
                  </section>

                  

                  {/* Recipe List with Filter */}
                  <section>
                    <RecipeList searchQuery={searchQuery} />
                  </section>
                </>
              }
            />

            <Route path="/recipe/:id" element={<RecipeDetails />} />

            <Route
              path="*"
              element={
                <p className="text-center text-red-500 text-lg mt-10">
                  404 - Page not found
                </p>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
