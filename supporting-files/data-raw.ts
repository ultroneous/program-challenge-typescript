import {Product, Recipe, UoMName, UoMType} from "./models";

/*
* Contains a matrix for converting from one unit of measure to another
*/
export const UnitsConversionTable: any[] = [
    {
        fromUnitName: UoMName.millilitres,
        fromUnitType: UoMType.volume,
        toUnitName: UoMName.grams,
        toUnitType: UoMType.mass,
        conversionFactor: 1 * 1
    },
    {
        fromUnitName: UoMName.milligrams,
        fromUnitType: UoMType.mass,
        toUnitName: UoMName.grams,
        toUnitType: UoMType.mass,
        conversionFactor: 1 / 1000
    },
    {
        fromUnitName: UoMName.grams,
        fromUnitType: UoMType.mass,
        toUnitName: UoMName.kilogram,
        toUnitType: UoMType.mass,
        conversionFactor: 1 / 1000
    },
    {
        fromUnitName: UoMName.kilogram,
        fromUnitType: UoMType.mass,
        toUnitName: UoMName.grams,
        toUnitType: UoMType.mass,
        conversionFactor: 1 * 1000
    },
    {
        fromUnitName: UoMName.cups,
        fromUnitType: UoMType.volume,
        toUnitName: UoMName.millilitres,
        toUnitType: UoMType.volume,
        conversionFactor: 236.6
    },
    {
        // hack for eggs
        fromUnitName: UoMName.whole,
        fromUnitType: UoMType.whole,
        toUnitName: UoMName.grams,
        toUnitType: UoMType.mass,
        conversionFactor: 50
    }
];

/*
* Contains a list of recipes which will need costing & nutrition summary
* Even though there is only one recipe, we expect your code should be able to work for a whole table
*/
export const RecipeData: Recipe[] = [
    {
        recipeName: "Creme Brulee",
        lineItems: [
            {
                ingredient: {
                    ingredientName: "Cream"
                },
                unitOfMeasure: {
                    uomAmount: 2,
                    uomName: UoMName.cups,
                    uomType: UoMType.volume
                }
            },
            {
                ingredient: {
                    ingredientName: "Egg"
                },
                unitOfMeasure: {
                    uomAmount: 5,
                    uomName: UoMName.whole,
                    uomType: UoMType.whole
                }
            },
            {
                ingredient: {
                    ingredientName: "Sugar"
                },
                unitOfMeasure: {
                    uomAmount: 0.5,
                    uomName: UoMName.cups,
                    uomType: UoMType.volume
                }
            }
        ]
    }
];

/*
* Contains a list of products which can be supplied for ingredients
*/
export const ProductData: Product[] = [
    {
        productName: "Raw Sugar",
        brandName: "Bundaberg",
        nutrientFacts: [
            {
                nutrientName: "Carbohydrates",
                quantityAmount: {
                    uomAmount: 99.8,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.millilitres,
                    uomType: UoMType.volume
                }
            },
            {
                nutrientName: "Sodium",
                quantityAmount: {
                    uomAmount: 1,
                    uomName: UoMName.milligrams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                }
            }
        ],
        supplierProducts: [
            {
                supplierName: "Woolworths",
                supplierProductName: "Bundaberg Raw Sugar",
                supplierPrice: 6.84,
                supplierProductUoM: {
                    uomAmount: 1,
                    uomName: UoMName.kilogram,
                    uomType: UoMType.mass
                }
            },
            {
                supplierName: "Coles",
                supplierProductName: "Bundaberg Raw Sugar",
                supplierPrice: 5.95,
                supplierProductUoM: {
                    uomAmount: 1,
                    uomName: UoMName.kilogram,
                    uomType: UoMType.mass
                }
            },
            {
                supplierName: "IGA",
                supplierProductName: "Bundaberg Raw Sugar",
                supplierPrice: 5.95,
                supplierProductUoM: {
                    uomAmount: 1,
                    uomName: UoMName.kilogram,
                    uomType: UoMType.mass
                }
            }
        ]
    },
    {
        productName: "Thickened Cream",
        brandName: "Bulla",
        nutrientFacts: [
            {
                nutrientName: "Fat",
                quantityAmount: {
                    uomAmount: 35,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                }
            },
            {
                nutrientName: "Protein",
                quantityAmount: {
                    uomAmount: 5,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                }
            },
            {
                nutrientName: "Carbohydrates",
                quantityAmount: {
                    uomAmount: 5,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                }
            }
        ],
        supplierProducts: [
            {
                supplierName: "Woolworths",
                supplierProductName: "Bulla Thickened Cream 600ml",
                supplierPrice: 5.35,
                supplierProductUoM: {
                    uomAmount: 600,
                    uomName: UoMName.millilitres,
                    uomType: UoMType.volume
                }
            },
            {
                supplierName: "Woolworths",
                supplierProductName: "Bulla Thickened Cream 300ml",
                supplierPrice: 2.85,
                supplierProductUoM: {
                    uomAmount: 300,
                    uomName: UoMName.millilitres,
                    uomType: UoMType.volume
                }
            }
        ]
    },
    {
        productName: "Cream",
        brandName: "Dairy Farmers",
        nutrientFacts: [
            {
                nutrientName: "Protein",
                quantityAmount: {
                    uomAmount: 1.6,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.millilitres,
                    uomType: UoMType.volume
                }
            },
            {
                nutrientName: "Carbohydrates",
                quantityAmount: {
                    uomAmount: 3.7,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.millilitres,
                    uomType: UoMType.volume
                }
            }
        ],
        supplierProducts: [
            {
                supplierName: "Coles",
                supplierProductName: "Dairy Farmers Thickened Cream 300ml",
                supplierPrice: 3.15,
                supplierProductUoM: {
                    uomAmount: 300,
                    uomName: UoMName.millilitres,
                    uomType: UoMType.volume
                }
            },
            {
                supplierName: "Woolworths",
                supplierProductName: "Dairy Farmers Thickened Cream 300ml",
                supplierPrice: 3.0,
                supplierProductUoM: {
                    uomAmount: 300,
                    uomName: UoMName.millilitres,
                    uomType: UoMType.volume
                }
            }
        ]
    },
    {
        productName: "Free Range Egg",
        brandName: "Sunny Queen",
        nutrientFacts: [
            {
                nutrientName: "Protein",
                quantityAmount: {
                    uomAmount: 12.2,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                }
            },
            {
                nutrientName: "Carbohydrates",
                quantityAmount: {
                    uomAmount: 1.3,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                }
            }
        ],
        supplierProducts: [
            {
                supplierName: "Coles",
                supplierProductName: "Sunny Queen Free Range Large Eggs 18 pack",
                supplierPrice: 9.45,
                supplierProductUoM: {
                    uomAmount: 18,
                    uomName: UoMName.whole,
                    uomType: UoMType.whole
                }
            },
            {
                supplierName: "Coles",
                supplierProductName: "Sunny Queen Free Range Large Eggs 12 pack",
                supplierPrice: 6.95,
                supplierProductUoM: {
                    uomAmount: 12,
                    uomName: UoMName.whole,
                    uomType: UoMType.whole
                }
            }
        ]
    },
    {
        productName: "Cage Free Egg",
        brandName: "Sunny Queen",
        nutrientFacts: [
            {
                nutrientName: "Protein",
                quantityAmount: {
                    uomAmount: 12.2,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                }
            },
            {
                nutrientName: "Carbohydrates",
                quantityAmount: {
                    uomAmount: 1.3,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                },
                quantityPer: {
                    uomAmount: 100,
                    uomName: UoMName.grams,
                    uomType: UoMType.mass
                }
            }
        ],
        supplierProducts: [
            {
                supplierName: "Coles",
                supplierProductName: "Sunny Queen Cage Free Large Eggs 18 pack",
                supplierPrice: 7.95,
                supplierProductUoM: {
                    uomAmount: 18,
                    uomName: UoMName.whole,
                    uomType: UoMType.whole
                }
            }
        ]
    }
];
