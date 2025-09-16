// ClothesPage.jsx
import React from "react";
import CategoryPage from "./CategoryPage";
import { allCategories, clothesItems } from "../data/categoryData";

const ClothesPage = () => {
  return <CategoryPage categoryTitle="Clothes" categories={allCategories} items={clothesItems} />;
};

export default ClothesPage;
