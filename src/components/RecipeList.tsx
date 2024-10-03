import { useState } from 'react';
import { Grid } from '@mui/material';
import { Recipe } from '../types/Recipe';
import { RecipeCard } from './RecipeCard';
import { initialRecipes } from '../data/initialRecipes';

export const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);

  const handleUpdateRecipe = (updatedRecipe: Recipe) => {
    setRecipes(recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ));
  };

  return (
    <Grid container spacing={3}>
      {recipes.map(recipe => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <RecipeCard recipe={recipe} onUpdate={handleUpdateRecipe} />
        </Grid>
      ))}
    </Grid>
  );
};