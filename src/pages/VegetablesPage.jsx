import React from "react";
import CategoryPage from "./CategoryPage";
import { allCategories, vegetablesItems } from "../data/categoryData";

const VegetablesPage = () => {
  return <CategoryPage categoryTitle="Vegetables" categories={allCategories} items={vegetablesItems} />;
};

export default VegetablesPage;