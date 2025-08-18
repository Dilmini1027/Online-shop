// src/pages/CakeTypes.jsx
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

const Cakes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => navigate(path);

  // Categories with subitems
  const allCategories = [
     { title: 'Cakes', link: '/cakes', color: '#ffcc80', subItems: ['All', 'Violet', 'Chocolate', 'Butter', 'Strawberry', 'Red Velvet', 'Lemon', 'Black Forest', 'Cheese','Cup','Bento', 'Jar', 'Muffin'] },
    { title: 'Clothes', link: '/clothes', color: '#90caf9', subItems: ['All', 'Frocks', 'Trousers', 'Lehenga', 'Sarees', 'Hot Shorts', 'Blouse' ] },
    { title: 'Fruits', link: '/fruits', color: '#a5d6a7', subItems: ['All', 'Citrus', 'Berry', 'Tropical'] },
    { title: 'Flowers', link: '/flowers', color: '#f48fb1', subItems: ['All', 'Fresh Flowers', 'Artificial'] },
    { title: 'Vegetables', link: '/vegetables', color: '#81c784', subItems: ['All', 'Leafy', 'Root', 'Fruits', 'Herbs'] },
    { title: 'Drinks', link: '/drinks', color: '#bcaaa4', subItems: ['All', 'Ice Coffee', 'Mocktail', 'Cool Drink', 'Sun Crush', 'Energy Drinks'] },
 ];

  // Cake variants with separate images and prices
  const cakeTypes = [
    
    { title: 'Violet Cake', link: '/cakes/red-violet-1', image: '/cakes/5acad53a-0466-4b38-9789-a9ebaa768e80.jpeg', type: 'violet', price: '2kg - Rs 3500.00' },
     { title: 'Red Velvet', link: '/cakes/red-velvet-1', image: '/cakes/59580f96-9f96-451b-893a-e067d0acee62.jpeg', type: 'red velvet', price: '2kg - Rs 3000.00' },
    { title: 'Lemon Cake', link: '/cakes/lemon-2', image: '/cakes/f3923894-34f8-4426-8672-1c5a6ce2e164.jpeg', type: 'lemon', price: '2kg - Rs 3500.00' },
    { title: 'Black Forest', link: '/cakes/black-forest-1', image: '/cakes/This gluten-free Black Forest Cake is a healthier….jpeg', type: 'black forest', price: '1.5kg - Rs 3000.00' },
    { title: 'Cheese Cake', link: '/cakes/cheese-2', image: '/cakes/This carrot cake recipe is easy to make and….jpeg', type: 'cheese', price: '0.5kg - Rs 1200.00' },
     { title: 'Cup Cake', link: '/cup/cup-1', image: '/cup/Christmas Tree Cupcakes, a simple Christmas….jpeg', type: 'cup', price: '5 pcs - Rs 1500.00' },
    { title: 'Cup Cake', link: '/cup/cup-2', image: '/cup/dc7f46bc-0388-4174-bb79-1b92ac186ffa.jpeg', type: 'cup', price: '5 pcs - Rs 2000.00' },
    { title: 'Bento Cake', link: '/bento/bento-1', image: '/bento/08156a6f-9936-49c3-b79e-6acce14a5d97.jpeg', type: 'bento', price: '0.8kg - Rs 2000.00' },
   { title: 'Jar Cake', link: '/jar/jar-1', image: '/jar/Chocolate cake jar.jpeg', type: 'jar', price: '0.8kg - Rs 2500.00' },
    
    { title: 'Strawberry Cake', link: '/cakes/strawberry-2', image: '/cakes/cc013cca-d41b-4979-9349-9ed9bdaa0f83.jpeg', type: 'strawberry', price: '1kg - Rs 2000.00' },
    { title: 'Butter Cake', link: '/cakes/butter-2', image: '/cakes/Resep Thai Butter Cake dari @liuin85.jpeg', type: 'butter', price: '1kg - Rs 1500.00' },
    { title: 'Violet Cake', link: '/cakes/red-violet-2', image: '/cakes/https___youtu_be_gDfls8w_SLI.jpeg', type: 'violet', price: '2.5kg - Rs 3500.00' },
    { title: 'Muffin', link: '/muffin/muffin-2', image: '/muffin/a86cfd8b-dee4-4ba1-af4e-b0c038cc3163.jpeg', type: 'muffin', price: '10 pcs - Rs 1000.00' },
    { title: 'Chocolate Cake', link: '/cakes/chocolate-3', image: '/cakes/Triple Chocolate Ombre Cake.jpeg', type: 'chocolate', price: '0.8kg - Rs 1800.00' },
    { title: 'Jar Cake', link: '/jar/jar-2', image: '/jar/Indulge in our delicious gourmet cake jars, made….jpeg', type: 'jar', price: '2kg - Rs 2500.00' },
    { title: 'Lemon Cake', link: '/cakes/lemon-1', image: '/cakes/Refresh your senses with our Blueberry Lemon Cake….jpeg', type: 'lemon', price: '2kg - Rs 3500.00' },
     { title: 'Strawberry Cake', link: '/cakes/strawberry-3', image: '/cakes/Indulge in this light and airy Strawberry and….jpeg', type: 'strawberry', price: '1.5kg - Rs 2700.00' },
    { title: 'Lemon Cake', link: '/cakes/lemon-3', image: '/cakes/ce54ce41-8eb5-4bb3-bd56-db5162944575.jpeg', type: 'lemon', price: '1kg - Rs 2000.00' },
     { title: 'Red Velvet', link: '/cakes/red-velvet-2', image: '/cakes/c3c4cbba-2fcb-47a1-a463-48facb4d9323.jpeg', type: 'red velvet', price: '1.5kg - Rs 3000.00' },
    { title: 'Black Forest', link: '/cakes/black-forest-2', image: '/cakes/Easy Step by Step Guide to Make Black forest Cake.jpeg', type: 'black forest', price: '1kg - Rs 2000.00' },
   { title: 'Red Velvet', link: '/cakes/red-velvet-3', image: '/cakes/Red Velvet Cake __A classic red velvet cake with creamy cream cheese frosting, served in slices on a white plate_ __Ingredients_ _For the Cake_ _- 2 1_2 cups all-purpose flour _- 1 1_2 cups granulated sugar _- 1.jpeg', type: 'red velvet', price: '1kg - Rs 2000.00' },
    { title: 'Cheese Cake', link: '/cakes/cheese-1', image: '/cheese/🍰 Red Velvet White Chocolate Cheesecake_ A….jpeg', type: 'cheese', price: '1kg - Rs 2500.00' },
    { title: 'Cheese Cake', link: '/cakes/cheese-3', image: '/cheese/Black Forest Cheesecake _ RICARDO.jpeg', type: 'cheese', price: '0.8kg - Rs 1500.00' },
    { title: 'Black Forest', link: '/cakes/black-forest-3', image: '/cakes/Choose Top Best 9 Black Forest Cake and….jpeg', type: 'black forest', price: '2kg - Rs 3000.00' },
    { title: 'Cup Cake', link: '/cup/cup-3', image: '/cup/20b96e25-488c-47fe-8fe7-83c47933ebea.jpeg', type: 'cup', price: '5 pcs - Rs 1800.00' },
    { title: 'Bento Cake', link: '/bento/bento-2', image: '/bento/super cute 🧁 _ craveinn, kannapuram, kannur….jpeg', type: 'bento', price: '0.5kg - Rs 1000.00' },
    { title: 'Bento Cake', link: '/bento/bento-3', image: '/bento/be5cecef-0a0e-4c97-90c2-49c8b6bf8297.jpeg', type: 'bento', price: '0.8kg - Rs 2000.00' },
    { title: 'Jar Cake', link: '/jar/jar-3', image: '/jar/Mason Jar Cake Favors.jpeg', type: 'jar', price: '0.7kg - Rs 1800.00' },
    { title: 'Muffin', link: '/muffin/muffin-1', image: '/muffin/Super easy and delicious almond muffins recipe….jpeg', type: 'muffin', price: '1kg - Rs 1800.00' },
    { title: 'Muffin', link: '/muffin/muffin-3', image: '/muffin/476c958c-8f04-4e37-99ac-f540027d3c3a.jpeg', type: 'muffin', price: '2.5kg - Rs 3800.00' },
    { title: 'Chocolate Cake', link: '/cakes/chocolate-2', image: '/cakes/Chococlate Fudge Cake.jpeg', type: 'chocolate', price: '3kg - Rs 4000.00' },
    { title: 'Butter Cake', link: '/cakes/butter-1', image: '/cakes/(1) New Message!.jpeg', type: 'butter', price: '1kg - Rs 2000.00' },
    { title: 'Violet Cake', link: '/cakes/red-violet-3', image: '/cakes/Embark on a culinary journey with this stunning….jpeg', type: 'violet', price: '0.8kg - Rs 1500.00' },
    { title: 'Strawberry Cake', link: '/cakes/strawberry-1', image: '/cakes/This looks so pretty yet relatively simple_.jpeg', type: 'strawberry', price: '3kg - Rs 4000.00' }, 
    { title: 'Chocolate Cake', link: '/cakes/chocolate-1', image: '/cakes/bad036d9-4e9a-4173-b002-f399031ae528.jpeg', type: 'chocolate', price: '1kg - Rs 2000.00' }, 
    { title: 'Butter Cake', link: '/cakes/butter-3', image: '/cakes/630078a7-3409-4a72-bed2-5e5c4c9e5d61.jpeg', type: 'butter', price: '0.8kg - Rs 1800.00' },

    
    
    
  
    
     
    
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
  const filteredCakes = cakeTypes.filter(cake => {
    const matchesSubItem = selectedSubItem === 'all' || cake.type.toLowerCase() === selectedSubItem.toLowerCase();
    const matchesSearch = searchQuery === '' || cake.title.toLowerCase().includes(searchQuery.toLowerCase());
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
                        if (cat.title.toLowerCase() === 'cakes') {
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
          {filteredCakes.map((cake, index) => (
            <Card
              key={index}
              sx={{
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
              }}
              onClick={() => handleNavClick(cake.link)}
            >
              <CardMedia
                component="img"
                height="270"
                image={cake.image}
                alt={cake.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                  {cake.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center', color: '#555' }}>
                  {cake.price}
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

export default Cakes;
