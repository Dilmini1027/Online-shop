
// src/pages/Vegetables.jsx
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

const Vegetables = () => {
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

  // Vegetable items
  const vegetableTypes = [
    { title: 'Spinach', link: '/vegetables/leafy/spinach', image: '/vegetables/spinach.jpeg', type: 'leafy', price: 'Rs 120/kg' },
    { title: 'Lettuce', link: '/vegetables/leafy/lettuce', image: '/vegetables/lettuce.jpeg', type: 'leafy', price: 'Rs 150/kg' },
    { title: 'Carrot', link: '/vegetables/root/carrot', image: '/vegetables/carrot.jpeg', type: 'root', price: 'Rs 80/kg' },
    { title: 'Beetroot', link: '/vegetables/root/beetroot', image: '/vegetables/beetroot.jpeg', type: 'root', price: 'Rs 90/kg' },
    { title: 'Tomato', link: '/vegetables/fruits/tomato', image: '/vegetables/tomato.jpeg', type: 'fruits', price: 'Rs 70/kg' },
    { title: 'Coriander', link: '/vegetables/herbs/coriander', image: '/vegetables/coriander.jpeg', type: 'herbs', price: 'Rs 50/bunch' },
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

  // Filter vegetables by selected sub-item or search
  const filteredVegetables = vegetableTypes.filter((veg) => {
    const matchesSubItem = selectedSubItem === 'all' || veg.type.toLowerCase() === selectedSubItem.toLowerCase();
    const matchesSearch = searchQuery === '' || veg.title.toLowerCase().includes(searchQuery.toLowerCase());
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

      {/* Vegetables Grid */}
      <Container maxWidth={false} sx={{ p: 1, mt: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows: '350px',
            gap: 2,
          }}
        >
          {filteredVegetables.map((veg, index) => (
            <Card
              key={index}
              sx={{
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
              }}
              onClick={() => handleNavClick(veg.link)}
            >
              <CardMedia
                component="img"
                height="270"
                image={veg.image}
                alt={veg.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                  {veg.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center', color: '#555' }}>
                  {veg.price}
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

export default Vegetables;
