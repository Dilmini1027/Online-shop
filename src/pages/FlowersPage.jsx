import React from "react";
import CategoryPage from "./CategoryPage";
import { allCategories, flowersItems } from "../data/categoryData";

const FlowersPage = () => {
  return <CategoryPage categoryTitle="Flowers" categories={allCategories} items={flowersItems} />;
};
export default FlowersPage;

// Ensure CategoryPage renders each item as a link to /flowers/{itemId}
// If you use a custom CategoryPage, make sure each item card or button navigates to:
//   `/flowers/${item.id}` or `/flowers/${item.link}`
// When you click on any flower item in the FlowersPage, it navigates to /flowers/{itemId} or /flowers/{item.link}.
// This is handled by your CategoryPage component, which should use useNavigate to route to the details page.

// Your App.js has this route:
// <Route path="/:category/:itemId" element={<ItemDetailsPage />} />

// Your ItemDetailsPage will then display the details, price, image, and options for the selected flower item.

// To summarize:
// 1. CategoryPage renders each item as a clickable card/button.
// 2. On click, it navigates to /flowers/{itemId}.
// 3. App.js matches this route and renders ItemDetailsPage.
// 4. ItemDetailsPage fetches the item from flowersItems and displays its details, price, and options.

// No further code changes needed here if your CategoryPage and ItemDetailsPage are set up as above.