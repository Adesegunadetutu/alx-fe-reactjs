import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientList = ingredients
        .split("\n")
        .map((i) => i.trim())
        .filter((i) => i);
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please provide at least 2 ingredients";
      }
    }

    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients
        .split("\n")
        .map((i) => i.trim())
        .filter((i) => i),
      steps: steps
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s),
    };

    console.log("Recipe submitted:", newRecipe);

    // Clear the form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">
        Add New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Enter recipe title"
            className={`w-full border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            placeholder="Enter each ingredient on a new line"
            rows="4"
            className={`w-full border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps (one per line)
          </label>
          <textarea
            placeholder="Enter each step on a new line"
            rows="4"
            className={`w-full border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
