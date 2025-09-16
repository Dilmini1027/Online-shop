import React, { useMemo, useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, Stack, Button, IconButton, Divider, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  // Use local state for mock items if cart is empty
  const initialMockCartItems = [
    {
      id: 1,
      title: "Chocolate Cake",
      size: "1kg",
      image: process.env.PUBLIC_URL + "/cakes/bad036d9-4e9a-4173-b002-f399031ae528.jpeg", // Place your image in public/images/cake.jpg
      price: 2500,
      quantity: 1,
    },
    {
      id: 2,
      title: "Summer Dress",
      size: "M",
      image: process.env.PUBLIC_URL + "/frocks/1236ce77-5c5e-4245-871b-4b22105b74c4.jpeg", // Place your image in public/images/dress.jpg
      price: 3200,
      quantity: 2,
    },
    {
      id: 3,
      title: "Watermeolon",
      size: "500g",
      image: process.env.PUBLIC_URL + "/fruits/02bb9a84-d053-4f8b-9a32-c7f5a7f1fec4.jpeg", // Place your image in public/images/fruits.jpg
      price: 1800,
      quantity: 1,
    }
  ];

  // If cart is empty, use local state for mock items
  const [mockCart, setMockCart] = useState(initialMockCartItems);

  const isMock = cartItems.length === 0;
  const displayCartItems = isMock ? mockCart : cartItems;

  // Handlers for mock data
  const handleMockUpdateQuantity = (id, newQty) => {
    setMockCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQty) } : item
      )
    );
  };

  const handleMockRemoveItem = (id) => {
    setMockCart(prev => prev.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = useMemo(
    () => displayCartItems.reduce(
      (sum, item) =>
        sum +
        (Number(item.price) || 0) *
        (Number(item.quantity) || 1),
      0
    ),
    [displayCartItems]
  );
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <Box sx={{ bgcolor: "#fafafd", minHeight: "100vh", px: { xs: 1, md: 4 }, py: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" fontWeight="bold" sx={{ mr: 2 }}>
          My Cart
        </Typography>
        <Box sx={{ bgcolor: "#ffe3f3", color: "#e94bb6", px: 2, py: 0.5, borderRadius: 2, fontWeight: "bold", fontSize: "1rem" }}>
          {displayCartItems.length} items
        </Box>
      </Box>
      {/* Main layout */}
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        alignItems: "flex-start",
        width: "100%",
        maxWidth: "1200px",
        mx: "auto"
      }}>
        {/* Cart Items */}
        <Box sx={{ flex: 2 }}>
          <Stack spacing={2}>
            {displayCartItems.map((item, idx) => (
              <Card key={idx} sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#ffeaf3",
                borderRadius: 3,
                boxShadow: 0,
                p: 2,
                minHeight: 140
              }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ width: 90, height: 90, objectFit: "contain", borderRadius: 2, mr: 2 }}
                />
                <CardContent sx={{ flex: 1, minWidth: 0, py: 0 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#222" }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: "#888" }}>{item.brand}</Typography>
                  <Typography variant="body2" sx={{ color: "#888", mb: 1 }}>{item.size}</Typography>
                  <Typography sx={{ color: "#e94bb6", fontWeight: "bold", fontSize: "1.1rem" }}>
                    Rs.{(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <IconButton
                    onClick={() =>
                      isMock
                        ? handleMockUpdateQuantity(item.id, item.quantity - 1)
                        : updateQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                    sx={{ border: "1px solid #ccc", bgcolor: "#fff" }}
                  >-</IconButton>
                  <Typography sx={{ mx: 1, minWidth: 24, textAlign: "center", fontWeight: "bold" }}>{item.quantity}</Typography>
                  <IconButton
                    onClick={() =>
                      isMock
                        ? handleMockUpdateQuantity(item.id, item.quantity + 1)
                        : updateQuantity(item.id, item.quantity + 1)
                    }
                    sx={{ border: "1px solid #ccc", bgcolor: "#fff" }}
                  >+</IconButton>
                </Box>
                <Box sx={{ textAlign: "right", minWidth: 120 }}>
                  <Typography sx={{ color: "#222", fontWeight: "bold", fontSize: "1.1rem" }}>
                    Rs.{(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </Typography>
                  <Button
                    color="error"
                    sx={{ mt: 1, textTransform: "none", fontWeight: "bold", fontSize: "1rem" }}
                    startIcon={<DeleteIcon />}
                    onClick={() =>
                      isMock
                        ? handleMockRemoveItem(item.id)
                        : removeItem(item.id)
                    }
                  >
                    Remove
                  </Button>
                </Box>
              </Card>
            ))}
          </Stack>
        </Box>
        {/* Order Summary */}
        <Box sx={{
          flex: 1,
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: 2,
          p: 3,
          minWidth: 320,
          maxWidth: 400,
          position: "sticky",
          top: 24
        }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Order Summary
          </Typography>
          
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Subtotal</Typography>
            <Typography>Rs.{subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Shipping</Typography>
            <Typography sx={{ color: "#81c784", fontWeight: "bold" }}>Free</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">Total</Typography>
            <Typography variant="h6" fontWeight="bold">Rs.{total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</Typography>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#e94bb6",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              py: 1.2,
              borderRadius: 2,
              mb: 2,
              "&:hover": { bgcolor: "#d13ca0" }
            }}
            onClick={() => alert("Proceed to checkout")}
          >
            Proceed to Checkout
          </Button>
          <Button
            fullWidth
            sx={{
              color: "#e94bb6",
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "none"
            }}
            onClick={() => navigate(-1)}
          >
            Continue Shopping
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
