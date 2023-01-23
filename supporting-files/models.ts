/*
* A recipe is a list of things that need to be cooked in order to result in a meal
*/
export interface Recipe {
    recipeName: string;
    lineItems: RecipeLineItem[]; // the list of things which must be cooked for this recipe
}

/*
* Defines an ingredient with a quantity for that ingredient which is to be added into the cooking
*/
export interface RecipeLineItem {
    ingredient: Ingredient;
    unitOfMeasure: UnitOfMeasure;
}

/*
* Food is measured in many ways, these are a few of the common measurement units for food
*/
export enum UoMName {
    kilogram = "kilogram",
    grams = "grams",
    cups = "cups",
    milligrams = "milligrams",
    millilitres = "millilitres",
    whole = "whole"
}

/*
* Combined with a UoMName from above, we can tell whether a unit type is for
* measuring volume, mass or whole items
*/
export enum UoMType {
    mass = "mass",
    volume = "volume",
    whole = "whole"
}

/*
* Combining a UoMName, a UoMType, and a numeric amount allows us to define a measurement of an ingredient.
* For example, 100 grams of Sugar would look like:
* {
*  uomAmount: 100,
*  uomName: grams,
*  uomType: mass
* }
*/
export interface UnitOfMeasure {
    uomAmount: number;
    uomName: UoMName;
    uomType: UoMType;
}

/*
* An ingredient is a simple object which allows us to say something like "Sugar" on a recipe
* when in reality, there are many types of sugar that could be purchase
*/
export interface Ingredient {
    ingredientName: string;
    description?: string;
}

/*
* A product is something you can buy on a shelf at the grocer. It is a literal manifestation of an ingredient.
* For the example of "Sugar" as an ingredient, you could buy Brown Sugar, or Raw Sugar from a specific brand.

* nutrientFacts outlines all nutrition information for this product
* supplierProducts defines all options we have to purchase this product
*/
export interface Product {
    productName: string;
    brandName: string;
    nutrientFacts: NutrientFact[];
    supplierProducts: SupplierProduct[];
}

/*
* Every food product sold comes with nutrition information on the packaging, we keep track of these
* so that we can calculate the total nutrients for a recipe once all ingredients are added and mixed.

* This interface represents a piece of nutritional information for a product.
* For example, 25grams of protein per 100g.
*/
export interface NutrientFact {
    nutrientName: string;
    quantityAmount: UnitOfMeasure;
    quantityPer: UnitOfMeasure;
}

/*
* Food products can be purchased from many different grocers at different prices.
* We call these "Supplier Products", where they are the same physical thing that can be purchased
* at different places, and in different volumes
*/
export interface SupplierProduct {
    supplierName: string;
    supplierProductName: string;
    supplierPrice: number;
    supplierProductUoM: UnitOfMeasure;
}
