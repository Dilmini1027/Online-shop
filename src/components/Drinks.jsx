// src/pages/Drinks.jsx
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

const Drinks = () => {
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

  // Drink items
  const drinkTypes = [
    { title: 'Iced Coffee', link: '/drinks/ice-coffee/iced-coffee', image: '/drinks/iced-coffee.jpeg', type: 'ice coffee', price: 'Rs 350' },
    { title: 'Mocha', link: '/drinks/ice-coffee/mocha', image: '/drinks/mocha.jpeg', type: 'ice coffee', price: 'Rs 400' },
    { title: 'Virgin Mojito', link: '/drinks/mocktail/virgin-mojito', image: '/drinks/virgin-mojito.jpeg', type: 'mocktail', price: 'Rs 300' },
    { title: 'Fruit Punch', link: '/drinks/mocktail/fruit-punch', image: '/drinks/fruit-punch.jpeg', type: 'mocktail', price: 'Rs 350' },
    { title: 'Cool Cola', link: '/drinks/cool-drink/cool-cola', image: '/drinks/cool-cola.jpeg', type: 'cool drink', price: 'Rs 150' },
    { title: 'Sun Crush Orange', link: '/drinks/sun-crush/sun-crush-orange', image: '/drinks/sun-crush-orange.jpeg', type: 'sun crush', price: 'Rs 200' },
    { title: 'Energy Drink X', link: '/drinks/energy-drinks/energy-x', image: '/drinks/energy-x.jpeg', type: 'energy drinks', price: 'Rs 500' },
  ];

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1] || 'Home';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubItem, setSelectedSubItem] = useState('all');

  // Filter categories
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

  // Filter drinks
  const filteredDrinks = drinkTypes.filter((drink) => {
    const matchesSubItem = selectedSubItem === 'all' || drink.type.toLowerCase() === selectedSubItem.toLowerCase();
    const matchesSearch = searchQuery === '' || drink.title.toLowerCase().includes(searchQuery.toLowerCase());
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
                      <a key={subIdx} onClick={() => setSelectedSubItem(subItem.toLowerCase())}>
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

      {/* Drinks Grid */}
      <Container maxWidth={false} sx={{ p: 1, mt: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows: '350px',
            gap: 2,
          }}
        >
          {filteredDrinks.map((drink, index) => (
            <Card
              key={index}
              sx={{
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
              }}
              onClick={() => handleNavClick(drink.link)}
            >
              <CardMedia
                component="img"
                height="270"
                image={drink.image}
                alt={drink.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                  {drink.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center', color: '#555' }}>
                  {drink.price}
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

export default Drinks;
