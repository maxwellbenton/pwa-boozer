import { normalize, schema } from "normalizr";

const ingredient = new schema.Entity("ingredients");
const proportion = new schema.Entity("proportions");
const cocktail = new schema.Entity("cocktails");

proportion.define({
  cocktail: cocktail,
  ingredient: ingredient
});
cocktail.define({
  proportions: [proportion]
});

const mySchema = [cocktail];

export const normalizedData = originalData => normalize(originalData, mySchema);
