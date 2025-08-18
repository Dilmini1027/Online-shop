// src/pages/Flowers.jsx
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

const Flowers = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => navigate(path);

  // Categories
  const allCategories = [
    { title: 'Cakes', link: '/cakes', color: '#ffcc80', subItems: [] },
    { title: 'Clothes', link: '/clothes', color: '#90caf9', subItems: [] },
    { title: 'Fruits', link: '/fruits', color: '#a5d6a7', subItems: [] },
    { title: 'Flowers', link: '/flowers', color: '#f48fb1', subItems: ['All', 'Fresh Flowers', 'Artificial'] },
    { title: 'Vegetables', link: '/vegetables', color: '#81c784', subItems: [] },
    { title: 'Drinks', link: '/drinks', color: '#bcaaa4', subItems: [] },
  ];

  // Flower items
  const flowerTypes = [
    { title: 'Red Rose', link: '/flowers/artificial/red-rose', image: '/flowers/Cute Crochet Flower Bouquet with a mix of colors….jpeg', type: 'artificial ', price: 'Rs 150/piece' },
    { title: 'Pink Lily', link: '/flowers/artificial/pink-lily', image: '/flowers/327f49cf-115b-4ac7-891e-f3c92290542b.jpeg', type: 'artificial ', price: 'Rs 200/piece' },
    { title: 'Artificial Tulip', link: '/flowers/artificial/tulip', image: '/flowers/523572e2-a998-48bb-9ba4-b45eaf33689e.jpeg', type: 'artificial', price: 'Rs 100/piece' },
     { title: 'Red Rose', link: '/flowers/fresh flowers/red-rose', image: '/flowers/bee24c39-9307-4c29-aed4-9c7b608656b6.jpeg', type: 'fresh flowers ', price: 'Rs 150/piece' },
    { title: 'Pink Lily', link: '/flowers/fresh flowers/pink-lily', image: '/flowers/01df9fc5-4d6f-4667-ad99-88cd028c89c2.jpeg', type: 'fresh flowers ', price: 'Rs 200/piece' },
    { title: 'Artificial Tulip', link: '/flowers/fresh flowers/tulip', image: '/flowers/7c09889d-41e0-4723-8c44-d12fd8eba876.jpeg', type: 'fresh flowers', price: 'Rs 100/piece' },
  
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

  // Filter flowers by selected sub-item or search
  const filteredFlowers = flowerTypes.filter((flower) => {
    const matchesSubItem = selectedSubItem === 'all' || flower.type.toLowerCase() === selectedSubItem.toLowerCase();
    const matchesSearch = searchQuery === '' || flower.title.toLowerCase().includes(searchQuery.toLowerCase());
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

      {/* Flowers Grid */}
      <Container maxWidth={false} sx={{ p: 1, mt: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows: '350px',
            gap: 2,
          }}
        >
          {filteredFlowers.map((flower, index) => (
            <Card
              key={index}
              sx={{
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
              }}
              onClick={() => handleNavClick(flower.link)}
            >
              <CardMedia
                component="img"
                height="270"
                image={flower.image}
                alt={flower.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                  {flower.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center', color: '#555' }}>
                  {flower.price}
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

export default Flowers;
