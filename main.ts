import {
  GetProductsForIngredient,
  GetRecipes,
} from "./supporting-files/data-access";
import {
  NutrientFact,
  Product,
  Recipe,
  RecipeLineItem,
  SupplierProduct,
} from "./supporting-files/models";
import {
  GetCostPerBaseUnit,
  GetNutrientFactInBaseUnits,
} from "./supporting-files/helpers";
import { RunTest, ExpectedRecipeSummary } from "./supporting-files/testing";

console.clear();
console.log("Expected Result Is:", ExpectedRecipeSummary);

const recipeData = GetRecipes(); // the list of 1 recipe you should calculate the information for
const recipeSummary: any = {}; // the final result to pass into the test function

/*
 * YOUR CODE GOES BELOW THIS, DO NOT MODIFY ABOVE
 * (You can add more imports if needed)
 * */

/*
 * YOUR CODE ABOVE THIS, DO NOT MODIFY BELOW
 * */
RunTest(recipeSummary);
