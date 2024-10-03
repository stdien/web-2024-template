import { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Recipe } from '../types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onUpdate: (updatedRecipe: Recipe) => void;
}

const StyledCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  borderRadius: '15px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  padding: '10px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const RecipeCard = ({ recipe, onUpdate }: RecipeCardProps) => {
  const [portions, setPortions] = useState(recipe.portions);

  const handlePortionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPortions = parseInt(event.target.value, 10);
    setPortions(newPortions);
  };

  const recalculateIngredients = () => {
    const factor = portions / recipe.portions;
    const updatedIngredients = recipe.ingredients.map(ingredient => ({
      ...ingredient,
      amount: ingredient.amount * factor,
    }));
    onUpdate({ ...recipe, portions, ingredients: updatedIngredients });
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {recipe.name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {recipe.description}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Ингредиенты:
        </Typography>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name}: {ingredient.amount} {ingredient.unit}
            </li>
          ))}
        </ul>
        <TextField
          type="number"
          label="Порции"
          value={portions}
          onChange={handlePortionsChange}
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        />
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={recalculateIngredients}
          fullWidth
        >
          Пересчитать
        </Button>
      </CardContent>
    </StyledCard>
  );
};