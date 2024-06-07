import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRecipe, uploadFile } from '../service/ApiRecipes';
import Category from './Category';

const AddRecipe = () => {
  const nameRef = useRef(null);
  const categoryRef = useRef(null);
  const ingredientsRef = useRef(null);
  const instructionsRef = useRef(null);
  const fileRef = useRef(null);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [imageUrl, setImageURL] = useState('');
  const [fileLabel, setFileLabel] = useState('No file chosen');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageURL(URL.createObjectURL(file));
    setFileLabel(file ? file.name : 'No file chosen');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = {
      name: nameRef.current.value,
      category: categoryRef.current.value,
      ingredients: ingredientsRef.current.value,
      instructions: instructionsRef.current.value,
      imageUrl: '',
    };

    if (!recipe.category) {
      setErrorMessage('Please select a category');
      return;
    }

    try {
      const email = localStorage.getItem('username');
      const file = fileRef.current.files[0];
      const generatedFileName = await uploadFile(file);
      recipe.imageUrl = generatedFileName;

      const data = await addRecipe(
        recipe.name,
        recipe.category,
        recipe.ingredients,
        recipe.instructions,
        recipe.imageUrl,
        email
      );
      console.log('Recipe added successfully:', data);

      navigate('/food-recipe');
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const handleCategoryChange = (category) => {
    categoryRef.current = category;
    setErrorMessage('');
  };

  return (
    <div className="container-add-recipe">
      <form onSubmit={handleSubmit}>
        <h2>Recipe Add</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <div className="form-group">
          <label>Recipe Title:</label>
          <input
            type="text"
            ref={nameRef}
            id="name"
            placeholder="Enter recipe title"
            required
          />
        </div>
        <div className="form-group">
          <label>Recipe category:</label>
          <Category onSubmitCategory={handleCategoryChange} />
        </div>
        <div className="form-group">
          <label>Recipe Ingredients:</label>
          <textarea
            ref={ingredientsRef}
            id="ingredients"
            placeholder="Enter ingredients"
            required
          />
        </div>
        <div className="form-group">
          <label>Recipe Instructions:</label>
          <textarea
            ref={instructionsRef}
            id="instructions"
            placeholder="Enter instructions"
            required
          />
        </div>
        <div className="form-group">
          <label>Recipe Image:</label>
          <input type="file" ref={fileRef} onChange={handleFileChange} required />
          {imageUrl && (
            <div>
              <img
                src={imageUrl}
                alt="Selected"
                style={{ maxWidth: '200px', marginTop: '10px' }}
              />
              <p>Image URL: {fileLabel}</p>
            </div>
          )}
        </div>
        <button type="submit" className="add-btn">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;

