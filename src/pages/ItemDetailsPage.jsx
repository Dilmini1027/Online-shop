import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useParams } from 'react-router-dom';

// Simulated data imports - replace with your actual imports
import { cakeTypes, clothesItems, fruitsItems, flowersItems, vegetablesItems, drinksItems } from '../data/categoryData';

const ItemDetailsPage = () => {
  const { category, itemId } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    size: '',
    flavor: 'Original',
    color: '',
    shape: 'Round',
    quantity: 1
  });
  const [currentPrice, setCurrentPrice] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Get all items from different categories
  const getAllItems = () => {
    return [
      ...cakeTypes,
      ...clothesItems,
      ...fruitsItems,
      ...flowersItems,
      ...vegetablesItems,
      ...drinksItems
    ];
  };

  // Helper to extract numeric price from item.price string
  function getNumericPrice(priceStr) {
    if (!priceStr) return 0;
    // Match "Rs 3500", "Rs 3500.00", "Rs 20/100g", etc.
    const match = priceStr.match(/Rs\s*([\d.,]+)/i);
    if (match) {
      return Number(match[1].replace(/,/g, ''));
    }
    // Fallback: try to find any number
    const numMatch = priceStr.match(/([\d.,]+)/);
    if (numMatch) {
      return Number(numMatch[1].replace(/,/g, ''));
    }
    return 0;
  }

  useEffect(() => {
    const allItems = getAllItems();
    const foundProduct = allItems.find(item =>
      (item.link && item.link.split('/').pop() === itemId) ||
      (item.id && item.id === itemId)
    );
    if (foundProduct) {
      setProduct({
        ...foundProduct,
        rating: 4.8,
        reviews: Math.floor(Math.random() * 200) + 50,
        description: getProductDescription(foundProduct),
        ingredients: getProductIngredients(foundProduct),
        inStock: true,
        estimatedDelivery: '2-3 days'
      });
      // Use helper for price
      const basePrice = getNumericPrice(foundProduct.price);
      setCurrentPrice(basePrice);

      // Set default options
      const defaultOptions = getDefaultOptions(foundProduct);
      setSelectedOptions({ ...selectedOptions, ...defaultOptions });
    }
  }, [itemId]);

  const getProductDescription = (product) => {
    const descriptions = {
      cake: `Indulge in our signature ${product.title}. Made with premium ingredients and crafted to perfection. This delicious cake is perfect for celebrations or treating yourself to something special.`,
      clothes: `Stylish and comfortable ${product.title}. Made with high-quality materials for durability and style. Perfect for any occasion.`,
      fruit: `Fresh and juicy ${product.title}. Carefully selected for quality and taste. Rich in vitamins and perfect for a healthy lifestyle.`,
      flower: `Beautiful ${product.title}. Fresh and vibrant, perfect for gifting or decorating your space.`,
      vegetable: `Fresh ${product.title}. Locally sourced and organic. Perfect for cooking healthy and delicious meals.`,
      drink: `Refreshing ${product.title}. Made with premium ingredients for the perfect taste experience.`
    };
    
    const type = product.link.includes('cake') ? 'cake' :
                 product.link.includes('clothes') ? 'clothes' :
                 product.link.includes('fruit') ? 'fruit' :
                 product.link.includes('flower') ? 'flower' :
                 product.link.includes('vegetable') ? 'vegetable' : 'drink';
    
    return descriptions[type];
  };

  const getProductIngredients = (product) => {
    const ingredients = {
      cake: ['Premium flour', 'Fresh eggs', 'Butter', 'Sugar', 'Vanilla extract', 'Baking powder'],
      clothes: ['Cotton', 'Polyester', 'Quality stitching', 'Durable fabric'],
      fruit: ['100% Natural', 'No preservatives', 'Fresh picked'],
      flower: ['Fresh stems', 'Natural fragrance', 'Long lasting'],
      vegetable: ['Organic', 'Locally sourced', 'Pesticide free'],
      drink: ['Natural ingredients', 'No artificial colors', 'Fresh preparation']
    };
    
    const type = product.link.includes('cake') ? 'cake' :
                 product.link.includes('clothes') ? 'clothes' :
                 product.link.includes('fruit') ? 'fruit' :
                 product.link.includes('flower') ? 'flower' :
                 product.link.includes('vegetable') ? 'vegetable' : 'drink';
    
    return ingredients[type];
  };

  const getDefaultOptions = (product) => {
    if (product.link.includes('cake')) {
      return {
        size: product.price.includes('kg') ? product.price.match(/[\d.]+kg/)?.[0] || '1kg' : '1kg',
        shape: 'Round',
        flavor: 'Original'
      };
    } else if (product.link.includes('clothes')) {
      return {
        size: 'M',
        color: 'Default'
      };
    }
    return {};
  };

  const getProductOptions = () => {
    if (!product) return {};
    
    if (product.link.includes('cake')) {
      return {
        size: [
          { value: '0.5kg', label: '0.5kg', priceMultiplier: 0.4 },
          { value: '1kg', label: '1kg', priceMultiplier: 0.7 },
          { value: '1.5kg', label: '1.5kg', priceMultiplier: 0.9 },
          { value: '2kg', label: '2kg', priceMultiplier: 1.0 },
          { value: '2.5kg', label: '2.5kg', priceMultiplier: 1.2 },
          { value: '3kg', label: '3kg', priceMultiplier: 1.4 }
        ],
        shape: [
          { value: 'Round', label: 'Round' },
          { value: 'Square', label: 'Square' },
          { value: 'Heart', label: 'Heart' },
          { value: 'Rectangle', label: 'Rectangle' }
        ],
        flavor: [
          { value: 'Original', label: 'Original' },
          { value: 'Extra Sweet', label: 'Extra Sweet' },
          { value: 'Less Sweet', label: 'Less Sweet' }
        ]
      };
    } else if (product.link.includes('clothes')) {
      return {
        size: [
          { value: 'XS', label: 'XS' },
          { value: 'S', label: 'S' },
          { value: 'M', label: 'M' },
          { value: 'L', label: 'L' },
          { value: 'XL', label: 'XL' },
          { value: 'XXL', label: 'XXL' }
        ],
        color: [
          { value: 'Red', label: 'Red' },
          { value: 'Blue', label: 'Blue' },
          { value: 'Black', label: 'Black' },
          { value: 'White', label: 'White' },
          { value: 'Pink', label: 'Pink' }
        ]
      };
    }
    return {};
  };

  const handleOptionChange = (optionType, value) => {
    setSelectedOptions(prev => ({ ...prev, [optionType]: value }));
    
    // Recalculate price based on options
    if (product) {
      const basePrice = getNumericPrice(product.price);
      const options = getProductOptions();
      let multiplier = 1;
      
      if (options[optionType]) {
        const option = options[optionType].find(opt => opt.value === value);
        if (option && option.priceMultiplier) {
          multiplier = option.priceMultiplier;
        }
      }
      
      setCurrentPrice(Math.round(basePrice * multiplier * selectedOptions.quantity));
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, selectedOptions.quantity + change);
    setSelectedOptions(prev => ({ ...prev, quantity: newQuantity }));
    
    // Update price based on quantity
    if (product) {
      const basePrice = getNumericPrice(product.price);
      setCurrentPrice(Math.round(basePrice * newQuantity));
    }
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { product, selectedOptions, currentPrice });
    // Add your cart logic here
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <ArrowBackIcon sx={{ fontSize: 20, mr: 1 }} />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const productOptions = getProductOptions();
  const tabs = ['Description', 'Ingredients/Details', 'Reviews'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <a href="/" className="hover:text-gray-700">Home</a>
          <span>/</span>
          <a href={`/${product.type}`} className="hover:text-gray-700 capitalize">{product.type}</a>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowBackIcon sx={{ fontSize: 20, mr: 1 }} />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((thumb) => (
                <div key={thumb} className="w-16 h-16 bg-white rounded-lg shadow cursor-pointer overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.title} ${thumb}`}
                    className="w-full h-full object-cover opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      sx={{
                        fontSize: 20,
                        color: i < Math.floor(product.rating) ? "#FFD700" : "#ccc"
                      }}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  Rs {currentPrice.toLocaleString()}.00
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Product Options */}
            <div className="space-y-4">
              {Object.entries(productOptions).map(([optionType, options]) => (
                <div key={optionType} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {optionType}
                  </label>
                  <select
                    value={selectedOptions[optionType] || ''}
                    onChange={(e) => handleOptionChange(optionType, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select {optionType}</option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              {/* Quantity */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <RemoveIcon sx={{ fontSize: 18 }} />
                  </button>
                  <span className="px-4 py-2 bg-gray-100 rounded-lg font-medium min-w-[60px] text-center">
                    {selectedOptions.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <AddIcon sx={{ fontSize: 18 }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCartIcon sx={{ fontSize: 20, mr: 1 }} />
                <span>Add to Cart</span>
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors"
                >
                  <FavoriteIcon sx={{ fontSize: 20, color: isFavorite ? "red" : "#888" }} />
                  <span>Wishlist</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors">
                  <ShareIcon sx={{ fontSize: 20 }} />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <LocalShippingIcon sx={{ fontSize: 20, color: "#1976d2", mt: 0.5 }} />
                <div>
                  <p className="text-blue-800 font-medium">
                    Estimated Delivery: {product.estimatedDelivery}
                  </p>
                  <p className="text-blue-600 text-sm mt-1">
                    Free delivery on orders over Rs 5,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="border-b border-gray-200">
              <div className="flex">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
                      activeTab === index
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 0 && (
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>
              )}

              {activeTab === 1 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {product.link.includes('cake') ? 'Ingredients' : 'Product Details'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.ingredients.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {[
                      { name: 'Sarah Johnson', rating: 5, date: '2 days ago', review: 'Amazing quality! Exceeded my expectations. Will definitely order again.' },
                      { name: 'Mike Chen', rating: 5, date: '1 week ago', review: 'Perfect for our celebration. Everyone loved it!' },
                      { name: 'Lisa Davis', rating: 4, date: '2 weeks ago', review: 'Great product, fast delivery. Highly recommended.' }
                    ].map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{review.name}</p>
                              <div className="flex items-center space-x-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                      key={i}
                                      sx={{
                                        fontSize: 16,
                                        color: i < review.rating ? "#FFD700" : "#ccc"
                                      }}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{review.review}</p>
                      </div>
                    ))}
                  </div>

                  {/* Add Review Button */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                      Write a Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Related Product {item}</h3>
                  <p className="text-blue-600 font-bold">Rs 2,500.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;