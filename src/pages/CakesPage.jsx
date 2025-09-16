import React from "react";
import CategoryPage from "./CategoryPage";
import { allCategories, cakeTypes } from "../data/categoryData";

const CakesPage = () => {
  return <CategoryPage categoryTitle="Cakes" categories={allCategories} items={cakeTypes} />;
};

export default CakesPage;
