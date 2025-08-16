
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

  // Categories with subitems
  const allCategories = [
    { title: 'Cakes', link: '/cakes', color: '#ffcc80', subItems: ['All', 'Violet', 'Chocolate', 'Butter', 'Strawberry', 'Red Velvet', 'Lemon', 'Black Forest', 'Cheese','Cup','Bento', 'Jar', 'Muffin'] },
    { title: 'Clothes', link: '/clothes', color: '#90caf9', subItems: ['All','Frocks', 'Trousers', 'Lehenga', 'Sarees', 'Hot Shorts', 'Blouse', 'Salvar'] },
    { title: 'Fruits', link: '/fruits', color: '#a5d6a7', subItems: [] },
    { title: 'Flowers', link: '/flowers', color: '#f48fb1', subItems: [] },
    { title: 'Vegetables', link: '/vegetables', color: '#81c784', subItems: [] },
    { title: 'Drinks', link: '/drinks', color: '#bcaaa4', subItems: ['Ice Coffee', 'Mocktail', 'Cool Drink', 'Sun Crush', 'Energy Drinks'] },
  ];

  // Cake variants with separate images and prices
  const clotheTypes = [
    
    { title: 'Frocks', link: 'clothes/frock', image: '/frocks/6e3a9e75-3c2e-44df-859c-7a0589dd2064.jpeg', type: 'frocks', price: '2kg - Rs 3500.00' },
     { title: 'Trousers', link: '/cakes/red-velvet-1', image: '/frocks/6e8614d9-5488-4487-9ff6-6845512d0f29.jpeg', type: 'trousers', price: '2kg - Rs 3000.00' },
    { title: 'Lehenga', link: '/cakes/lemon-2', image: '/cakes/f3923894-34f8-4426-8672-1c5a6ce2e164.jpeg', type: 'lehenga', price: '2kg - Rs 3500.00' },
    { title: 'Sarees', link: '/cakes/black-forest-1', image: '/cakes/This gluten-free Black Forest Cake is a healthier….jpeg', type: 'sarees', price: '1.5kg - Rs 3000.00' },
    { title: 'Hot Shorts', link: '/cakes/cheese-2', image: '/cakes/This carrot cake recipe is easy to make and….jpeg', type: 'hot shorts', price: '0.5kg - Rs 1200.00' },
     { title: 'Blouse', link: '/cup/cup-1', image: '/cup/Christmas Tree Cupcakes, a simple Christmas….jpeg', type: 'blouse', price: '5 pcs - Rs 1500.00' },
    { title: 'Salvar', link: '/cup/cup-2', image: '/cup/dc7f46bc-0388-4174-bb79-1b92ac186ffa.jpeg', type: 'salvar', price: '5 pcs - Rs 2000.00' },

    { title: 'Violet Cake', link: '/clothes/frocks', image: '/frocks/6e8614d9-5488-4487-9ff6-6845512d0f29.jpeg', type: 'frocks', price: '2kg - Rs 3500.00' },
     { title: 'Red Velvet', link: '/cakes/red-velvet-1', image: '/cakes/59580f96-9f96-451b-893a-e067d0acee62.jpeg', type: 'trousers', price: '2kg - Rs 3000.00' },
    { title: 'Lemon Cake', link: '/cakes/lemon-2', image: '/cakes/f3923894-34f8-4426-8672-1c5a6ce2e164.jpeg', type: 'lehenga', price: '2kg - Rs 3500.00' },
    { title: 'Black Forest', link: '/cakes/black-forest-1', image: '/cakes/This gluten-free Black Forest Cake is a healthier….jpeg', type: 'sarees', price: '1.5kg - Rs 3000.00' },
    { title: 'Cheese Cake', link: '/cakes/cheese-2', image: '/cakes/This carrot cake recipe is easy to make and….jpeg', type: 'hot shorts', price: '0.5kg - Rs 1200.00' },
     { title: 'Cup Cake', link: '/cup/cup-1', image: '/cup/Christmas Tree Cupcakes, a simple Christmas….jpeg', type: 'blouse', price: '5 pcs - Rs 1500.00' },
    { title: 'Cup Cake', link: '/cup/cup-2', image: '/cup/dc7f46bc-0388-4174-bb79-1b92ac186ffa.jpeg', type: 'salvar', price: '5 pcs - Rs 2000.00' },
    
    { title: 'Violet Cake', link: 'clothes/frocks', image: '/frocks/Holiday Plaid Square Neckline Cinching Wais Ruffle….jpeg', type: 'frocks', price: '2kg - Rs 3500.00' },
     { title: 'Red Velvet', link: '/cakes/red-velvet-1', image: '/cakes/59580f96-9f96-451b-893a-e067d0acee62.jpeg', type: 'trousers', price: '2kg - Rs 3000.00' },
    { title: 'Lemon Cake', link: '/cakes/lemon-2', image: '/cakes/f3923894-34f8-4426-8672-1c5a6ce2e164.jpeg', type: 'lehenga', price: '2kg - Rs 3500.00' },
    { title: 'Black Forest', link: '/cakes/black-forest-1', image: '/cakes/This gluten-free Black Forest Cake is a healthier….jpeg', type: 'sarees', price: '1.5kg - Rs 3000.00' },
    { title: 'Cheese Cake', link: '/cakes/cheese-2', image: '/cakes/This carrot cake recipe is easy to make and….jpeg', type: 'hot shorts', price: '0.5kg - Rs 1200.00' },
     { title: 'Cup Cake', link: '/cup/cup-1', image: '/cup/Christmas Tree Cupcakes, a simple Christmas….jpeg', type: 'blouse', price: '5 pcs - Rs 1500.00' },
    { title: 'Cup Cake', link: '/cup/cup-2', image: '/cup/dc7f46bc-0388-4174-bb79-1b92ac186ffa.jpeg', type: 'salvar', price: '5 pcs - Rs 2000.00' },
    
    
    
    
  
    
     
    
  ];

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1] || 'Home';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubItem, setSelectedSubItem] = useState('all');

  // Filter categories and sub-items for search
  const filteredCategories = allCategories
    .map(cat => {
      const filteredSubItems = cat.subItems.filter(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()));
      if (cat.title.toLowerCase().includes(searchQuery.toLowerCase()) || filteredSubItems.length > 0) {
        return { ...cat, subItems: filteredSubItems };
      }
      return null;
    })
    .filter(Boolean);

  // Filter cakes based on selected sub-item or search query
  const filteredClothes = clotheTypes.filter(clothe => {
    const matchesSubItem = selectedSubItem === 'all' || clothe.type.toLowerCase() === selectedSubItem.toLowerCase();
    const matchesSearch = searchQuery === '' || clothe.title.toLowerCase().includes(searchQuery.toLowerCase());
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
                      <a key={subIdx} onClick={() => {
                        if (cat.title.toLowerCase() === 'clothes') {
                          setSelectedSubItem(subItem.toLowerCase());
                        } else {
                          handleNavClick(`${cat.link}/${subItem.toLowerCase().replace(/\s/g,'-')}`);
                        }
                      }}>
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
              setSelectedSubItem('all'); // reset filter when typing
            }}
            sx={{ backgroundColor: '#fff', borderRadius: 1, minWidth: 200 }}
          />
        </Toolbar>
      </AppBar>

      {/* Cake Grid */}
      <Container maxWidth={false} sx={{ p: 1, mt: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows: '350px',
            gap: 2,
          }}
        >
          {filteredClothes.map((clothe, index) => (
            <Card
              key={index}
              sx={{
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
              }}
              onClick={() => handleNavClick(clothe.link)}
            >
              <CardMedia
                component="img"
                height="270"
                image={clothe.image}
                alt={clothe.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                  {clothe.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center', color: '#555' }}>
                  {clothe.price}
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
