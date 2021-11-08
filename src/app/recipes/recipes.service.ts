import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Khichdi',
      imageUrl: 'https://images.pexels.com/photos/6363498/pexels-photo-6363498.jpeg',
      ingredients: ['Rice', 'Dal', 'Ghee']
    },
    {
      id: 'r2',
      title: 'Chhole Bhature',
      imageUrl: 'https://media.istockphoto.com/photos/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-white-picture-id1306956291',
      ingredients: ['Maida', 'Kabuli Chane', 'Raita']
    },

  ];

  constructor() {}

    getAllRecipes() {
      return [...this.recipes];
    }

    getRecipe(recipeId: string) {
      return {
        ...this.recipes.find(recipe => recipe.id === recipeId)
    };

  }
}
