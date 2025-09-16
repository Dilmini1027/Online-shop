// FruitsPage.jsx
import React from "react";
import CategoryPage from "./CategoryPage";
import { allCategories, fruitsItems } from "../data/categoryData";

const FruitsPage = () => {
  return <CategoryPage categoryTitle="Fruits" categories={allCategories} items={fruitsItems} />;
};

export default FruitsPage;
