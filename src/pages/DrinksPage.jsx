import React from "react";
import CategoryPage from "./CategoryPage";
import { allCategories, drinksItems } from "../data/categoryData";

const DrinksPage = () => {
  return <CategoryPage categoryTitle="Drinks" categories={allCategories} items={drinksItems} />;
};

export default DrinksPage;
