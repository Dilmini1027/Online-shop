// src/pages/Clothes.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Breadcrumbs,
  Link,
  Box,
  TextField,
  Stack,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate, useLocation } from 'react-router-dom';

const Clothes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => navigate(path);

  // Categories
  const allCategories = [
   
    { title: 'Cakes', link: '/cakes', color: '#ffcc80', subItems: ['All', 'Violet', 'Chocolate', 'Butter', 'Strawberry', 'Red Velvet', 'Lemon', 'Black Forest', 'Cheese','Cup','Bento', 'Jar', 'Muffin'] },
    { title: 'Clothes', link: '/clothes', color: '#90caf9', subItems: ['All', 'Frocks', 'Trousers', 'Lehenga', 'Sarees', 'Hot Shorts', 'Blouse' ] },
    { title: 'Fruits', link: '/fruits', color: '#a5d6a7', subItems: ['All', 'Citrus', 'Berry', 'Tropical'] },
    { title: 'Flowers', link: '/flowers', color: '#f48fb1', subItems: ['All', 'Fresh Flowers', 'Artificial'] },
    { title: 'Vegetables', link: '/vegetables', color: '#81c784', subItems: ['All', 'Leafy', 'Root', 'Fruits', 'Herbs'] },
    { title: 'Drinks', link: '/drinks', color: '#bcaaa4', subItems: ['All', 'Ice Coffee', 'Mocktail', 'Cool Drink', 'Sun Crush', 'Energy Drinks'] },
  ];

  // Clothes items
  const clothesTypes = [
    { title: 'Yellow Floral Frock', link: '/clothes/frocks/floral-frock', image: '/frocks/𝗦𝗿𝗶 𝗟𝗮𝗻𝗸𝗮 𝗙𝗿𝗼𝗰𝗸 𝗚𝗶𝗿𝗹𝘀 🌸🌼🌺’s….jpeg', type: 'frocks', price: 'Rs 3500' },
    { title: 'Denim Trousers', link: '/clothes/frocks/trousers/denim-trousers', image: '/frocks/trousers/77d7c004-c874-487f-af4a-7af52202dfaa.jpeg', type: 'trousers', price: 'Rs 3000' },
    { title: 'Red Lehenga', link: '/clothes/frocks/lehenga/red-lehenga', image: '/frocks/lehenga/Radiate Royalty in This Exquisite Pink Lehenga….jpeg', type: 'lehenga', price: 'Rs 4000' },
    { title: 'Silk Saree', link: '/clothes/frocks/silk-saree', image: '/frocks/Featuring a maroon saree in silk satin base with….jpeg', type: 'sarees', price: 'Rs 5000' },
    { title: 'Hot Shorts', link: '/clothes/frocks/hot-shorts/blue-shorts', image: '/frocks/กางเกงขาสั้น เดนิม ผู้หญิง เข้ารูป สียีนส์กลาง….jpeg', type: 'hot shorts', price: 'Rs 1200' },
    { title: 'Blouse', link: '/clothes/frocks/blouse/pink-blouse', image: '/frocks/Begin de zomer met de Madeleine - Elegante lichte….jpeg', type: 'blouse', price: 'Rs 1500' },
    { title: 'Blue Floral Frock', link: '/clothes/frocks/floral-frock', image: '/frocks/1236ce77-5c5e-4245-871b-4b22105b74c4.jpeg', type: 'frocks', price: 'Rs 3500' },
    { title: 'Denim Trousers', link: '/clothes/frocks/trousers/denim-trousers', image: '/frocks/trousers/Discover the perfect trousers outfit for women….jpeg', type: 'trousers', price: 'Rs 3000' },
    { title: 'Silk Saree', link: '/clothes/frocks/silk-saree', image: '/frocks/d075ca9a-1a95-4d39-8b23-8e73db2c1210.jpeg', type: 'sarees', price: 'Rs 5000' },
    { title: 'Hot Shorts', link: '/clothes/frocks/hot-shorts/blue-shorts', image: '/frocks/Top Cross-Border Popular American Hottie Mid-Waist….jpeg', type: 'hot shorts', price: 'Rs 1200' }, 
    { title: 'Silk Saree', link: '/clothes/frocks/silk-saree', image: '/frocks/43ffbc4f-d974-4bca-b060-af9dc7b7db22.jpeg', type: 'sarees', price: 'Rs 5000' },
    { title: 'Denim Trousers', link: '/clothes/frocks/trousers/denim-trousers', image: '/frocks/trousers/a29a6eb5-271e-4b91-8a4c-e1dcfecc4c01.jpeg', type: 'trousers', price: 'Rs 3000' },
    { title: 'Hot Shorts', link: '/clothes/frocks/hot-shorts/blue-shorts', image: '/frocks/Super Cute And Stylish Ships In 5-10 Business Days.jpeg', type: 'hot shorts', price: 'Rs 1200' },
    { title: 'Hot Shorts', link: '/clothes/frocks/hot-shorts/blue-shorts', image: '/frocks/be8799ca-3e81-4591-b8c7-615ba3ca6fc6.jpeg', type: 'hot shorts', price: 'Rs 1200' },
    { title: 'Denim Trousers', link: '/clothes/frocks/trousers/denim-trousers', image: '/frocks/trousers/Available In Chocolate And Rust_ Trouser PantHigh….jpeg', type: 'trousers', price: 'Rs 3000' },
    { title: 'Hot Shorts', link: '/clothes/hot-shorts/blue-shorts', image: '/frocks/Material_ Cotton Blend Color_ Burgundy Size_ S….jpeg', type: 'hot shorts', price: 'Rs 1200' },
    
      
    
    { title: 'Denim Trousers', link: '/clothes/frocks/trousers/denim-trousers', image: '/frocks/trousers/ハイウェスト ストレートレッグジーンズ ミディアムウォッシュ カジュアル   デニム プレーン….jpeg', type: 'trousers', price: 'Rs 3000' },
    { title: 'Denim Trousers', link: '/clothes/frocks/trousers/denim-trousers', image: '/frocks/trousers/High-rise flare jeans with pockets are a trendy….jpeg', type: 'trousers', price: 'Rs 3000' },
    { title: 'Silk Saree', link: '/clothes/frocks/silk-saree', image: '/frocks/dm for orders.jpeg', type: 'sarees', price: 'Rs 5000' },
    { title: 'Silk Saree', link: '/clothes/frocks/silk-saree', image: '/frocks/30592191-f0bd-4d99-b88b-4c1f2b426d4c.jpeg', type: 'sarees', price: 'Rs 5000' },
    { title: 'Denim Trousers', link: '/clothes/frocks/trousers/denim-trousers', image: '/frocks/trousers/d1ca971c-7dc8-4f20-865b-465a087f98fc.jpeg', type: 'trousers', price: 'Rs 3000' },
    { title: 'Denim Trousers', link: '/clothes/frocks/trousers/denim-trousers', image: '/frocks/trousers/Available In Chocolate And Rust_ Trouser PantHigh….jpeg', type: 'trousers', price: 'Rs 3000' },
      { title: 'Black Casual,Cute Collar Short Sleeve Frock', link: '/clothes/frocks/floral-frock', image: '/frocks/Black Casual,Cute Collar Short Sleeve Woven Fabric….jpeg', type: 'frocks', price: 'Rs 3500' },
    { title: 'Cocktail dress', link: '/clothes/frocks/floral-frock', image: '/frocks/Cocktail dress for girls! Floral dress 👗.jpeg', type: 'frocks', price: 'Rs 3500' },
    { title: 'Red Lehenga', link: '/clothes/frocks/lehenga/red-lehenga', image: '/frocks/lehenga/Buy Pink Organza Embroidered Sequin Scoop Lehenga….jpeg', type: 'lehenga', price: 'Rs 4000' },
    { title: 'Red Lehenga', link: '/clothes/frocks/lehenga/red-lehenga', image: '/frocks/lehenga/585aa758-9185-4961-8a13-43df38051cd0.jpeg', type: 'lehenga', price: 'Rs 4000' },
    { title: 'Red Lehenga', link: '/clothes/frocks/lehenga/red-lehenga', image: '/frocks/lehenga/9290929e-ebbf-4d89-a688-32c7fa8199d7.jpeg', type: 'lehenga', price: 'Rs 7000' },
    { title: 'Red Lehenga', link: '/clothes/frocks/lehenga/red-lehenga', image: '/frocks/lehenga/05754110-7a1a-40c1-97cb-acb2ba3c30fe.jpeg', type: 'lehenga', price: 'Rs 4000' },
    { title: 'Off shoulder cute Frock', link: '/clothes/frocks/floral-frock', image: '/frocks/fashion fashionable fashion inspo fashion outfit….jpeg', type: 'frocks', price: 'Rs 3500' },
    { title: 'Hot Pink Cute Collar Cap Sleeve', link: '/clothes/frocks/floral-frock', image: '/frocks/Hot Pink Cute Collar Cap Sleeve Woven Fabric Plain….jpeg', type: 'frocks', price: 'Rs 3500' },
    { title: 'Textured Ruffle Hem Puff Sleeve Frock', link: '/clothes/frocks/floral-frock', image: '/frocks/Tween Girl Textured Ruffle Hem Puff Sleeve….jpeg', type: 'frocks', price: 'Rs 3500' },
     { title: 'Blouse', link: '/clothes/frocks/blouse/pink-blouse', image: '/frocks/ZANZEA Women Elegant 3_4 Lantern Sleeve Solid….jpeg', type: 'blouse', price: 'Rs 1500' },
    { title: 'Blue Boho Collar Sleeveless Frock', link: '/clothes/frocks/floral-frock', image: '/frocks/Blue Boho Collar Sleeveless Woven Fabric….jpeg', type: 'frocks', price: 'Rs 3500' },
    { title: 'Long floral Frock', link: '/clothes/frocks/floral-frock', image: '/frocks/663160c6-fb3f-4790-b7bb-d6bc68e57384.jpeg', type: 'frocks', price: 'Rs 3500' },
  ];

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1] || 'Home';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubItem, setSelectedSubItem] = useState('all');

  // Filter categories for search
  const filteredCategories = allCategories
    .map((cat) => {
      const filteredSubItems = cat.subItems.filter((sub) =>
        sub.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (cat.title.toLowerCase().includes(searchQuery.toLowerCase()) || filteredSubItems.length > 0) {
        return { ...cat, subItems: filteredSubItems };
      }
      return null;
    })
    .filter(Boolean);

  // Filter clothes by selected sub-item or search
  const filteredClothes = clothesTypes.filter((cloth) => {
    const matchesSubItem = selectedSubItem === 'all' || cloth.type.toLowerCase() === selectedSubItem.toLowerCase();
    const matchesSearch = searchQuery === '' || cloth.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubItem && matchesSearch;
  });

  return (
    <>
      {/* Breadcrumb Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar>
          <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ fontSize: '1rem', color: 'white', width: '100%' }}>
            <Link underline="hover" sx={{ cursor: 'pointer', color: 'red' }} onClick={() => handleNavClick('/home')}>
              Home
            </Link>
            <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
              {currentPage.replace('-', ' ')}
            </Typography>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>

      {/* Category Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#333' }}>
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Stack direction="row" spacing={5} flexWrap="wrap">
            {filteredCategories.map((cat, idx) => (
              <Box key={idx} sx={{ position: 'relative', display: 'inline-block' }}>
                <Link
                  underline="hover"
                  sx={{
                    cursor: 'pointer',
                    color: 'white',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    '&:hover': { color: '#ffcc80' },
                  }}
                  onClick={() => handleNavClick(cat.link)}
                >
                  {cat.title} {cat.subItems.length > 0 && <ArrowDropDownIcon sx={{ fontSize: '1rem' }} />}
                </Link>

                {/* Hover Menu */}
                {cat.subItems.length > 0 && (
                  <Box
                    sx={{
                      display: 'none',
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: '#555',
                      boxShadow: 3,
                      borderRadius: 1,
                      zIndex: 1000,
                      p: 1,
                      flexDirection: 'row',
                      gap: 1,
                      '& a': {
                        display: 'inline-block',
                        padding: '6px 12px',
                        color: 'white',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#777' },
                        whiteSpace: 'nowrap',
                      },
                    }}
                    className="hover-menu"
                  >
                    {cat.subItems.map((subItem, subIdx) => (
                      <a
                        key={subIdx}
                        onClick={() => setSelectedSubItem(subItem.toLowerCase())}
                      >
                        {subItem}
                      </a>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Stack>

          {/* Search */}
          <TextField
            placeholder="Search Category / Subitem"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedSubItem('all');
            }}
            sx={{ backgroundColor: '#fff', borderRadius: 1, minWidth: 200 }}
          />
        </Toolbar>
      </AppBar>

      {/* Clothes Grid */}
      <Container maxWidth={false} sx={{ p: 1, mt: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows: '400px',
            gap: 2,
          }}
        >
          {filteredClothes.map((cloth, index) => (
            <Card
              key={index}
              sx={{
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
              }}
              onClick={() => handleNavClick(cloth.link)}
            >
              <CardMedia
                component="img"
                height="300"
                image={cloth.image}
                alt={cloth.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                  {cloth.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center', color: '#555' }}>
                  {cloth.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Hover effect via CSS */}
      <style>
        {`
          .MuiToolbar-root .hover-menu {
            display: none;
          }
          .MuiToolbar-root .MuiBox-root:hover .hover-menu {
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default Clothes;
