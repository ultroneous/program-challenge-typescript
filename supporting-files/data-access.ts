import {ProductData, RecipeData, UnitsConversionTable} from "./data-raw";
import {
    Ingredient,
    Product,
    Recipe,
    UnitOfMeasure,
    UoMName,
    UoMType
} from "./models";

/*
* Given an ingredient, will return a list of all purchasable products for that ingredient
*/
export const GetProductsForIngredient = (ingredient: Ingredient): Product[] => {
    const results = ProductData.filter((product) =>
        product.productName
            .toLowerCase()
            .includes(ingredient.ingredientName.toLowerCase())
    );
    if (results) return results;
    else
        throw new Error(
            "This error should not occur, did you search for an ingredient that doesn't match any product?"
        );
};

/*
* Returns all data from the virtual recipes table
*/
export const GetRecipes = (): Recipe[] => {
    return RecipeData;
};

/*
* Returns all data from the virtual units conversion table
* You shouldn't need this, if you use the helper functions for converting units
*/
export const GetUnitsData = () => {
    return UnitsConversionTable;
};

/*
* For a given UoMType, will return a UoM for base measurements
* You shouldn't need this, if you use the helper functions for converting units
*/
export const GetBaseUoM = (uomType: UoMType): UnitOfMeasure => {
    switch (uomType) {
        case UoMType.whole:
            return {
                uomAmount: 1,
                uomName: UoMName.whole,
                uomType: UoMType.whole
            };
        case UoMType.mass:
            return {
                uomAmount: 100,
                uomName: UoMName.grams,
                uomType: UoMType.mass
            };
        case UoMType.volume:
            return {
                uomAmount: 100,
                uomName: UoMName.millilitres,
                uomType: UoMType.volume
            };
    }

    // default fallback to 100g
    return {
        uomAmount: 100,
        uomName: UoMName.grams,
        uomType: UoMType.mass
    };
};

/*
* UoM for base measurements of Nutrients
* You shouldn't need this, if you use the helper functions for converting units
*/
export const NutrientBaseUoM: UnitOfMeasure = {
    uomAmount: 100,
    uomName: UoMName.grams,
    uomType: UoMType.mass
};
