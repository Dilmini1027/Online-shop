import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Card,
  CardMedia,
  CardContent,
  Box,
  Stack,
  Link,
  Typography,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate, useParams } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import NavigationBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";
import {
  cakeTypes,
  clothesItems,
  flowersItems,
  vegetablesItems,
} from "../data/categoryData";

// ✅ Top Selling Items
const topSelling = [
  {
    title: cakeTypes[1].title, // Red Velvet
    image: cakeTypes[1].image,
    discount: "20% OFF",
    info: "Best Seller",
    price: cakeTypes[1].price,
  },
  {
    title: clothesItems[0].title, // Yellow Floral Frock
    image: clothesItems[0].image,
    discount: "15% OFF",
    info: "Trending",
    price: clothesItems[0].price,
  },
  {
    title: flowersItems[0].title,
    image: flowersItems[0].image,
    discount: "10% OFF",
    info: "Fresh Arrival",
    price: flowersItems[0].price,
  },
];

const CategoryPage = ({ categoryTitle, categories, items }) => {
  const navigate = useNavigate();
  const { category } = useParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubItem, setSelectedSubItem] = useState("all");

  // ✅ Filter categories based on search
  const filteredCategories = categories
    .map((cat) => {
      const filteredSubItems = cat.subItems.filter((sub) =>
        sub.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (
        cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        filteredSubItems.length > 0
      ) {
        return { ...cat, subItems: filteredSubItems };
      }
      return null;
    })
    .filter(Boolean);

  // ✅ Filter items based on selected sub-item and search
  const filteredItems = items.filter((item) => {
    const matchesSubItem =
      selectedSubItem === "all" ||
      item.type.toLowerCase() === selectedSubItem.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubItem && matchesSearch;
  });

  return (
    <Box
      sx={{
        bgcolor: "#fafafd",
        minHeight: "100vh",
        px: { xs: 1, md: 4 },
        py: { xs: 2, md: 4 },
      }}
    >
      <NavigationBar />

      {/* ✅ Category Menu */}
      <AppBar position="static" sx={{ backgroundColor: "#333" }}>
        <Toolbar
          sx={{ justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}
        >
          <Stack direction="row" spacing={5} flexWrap="wrap">
            {filteredCategories.map((cat, idx) => (
              <Box
                key={idx}
                sx={{ position: "relative", display: "inline-block" }}
              >
                <Link
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    "&:hover": { color: "#ffcc80" },
                  }}
                  onClick={() => navigate(cat.link)}
                >
                  {cat.title}
                  {cat.subItems.length > 0 && (
                    <ArrowDropDownIcon sx={{ fontSize: "1rem" }} />
                  )}
                </Link>

                {cat.subItems.length > 0 && (
                  <Box
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "#555",
                      boxShadow: 3,
                      borderRadius: 1,
                      zIndex: 1000,
                      p: 1,
                      flexDirection: "row",
                      gap: 1,
                      "& a": {
                        display: "inline-block",
                        padding: "6px 12px",
                        color: "white",
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#777" },
                        whiteSpace: "nowrap",
                      },
                    }}
                    className="hover-menu"
                  >
                    {cat.subItems.map((subItem, subIdx) => (
                      <a
                        key={subIdx}
                        onClick={() => {
                          if (
                            cat.title.toLowerCase() ===
                            categoryTitle.toLowerCase()
                          ) {
                            setSelectedSubItem(subItem.toLowerCase());
                          } else {
                            navigate(
                              `${cat.link}/${subItem
                                .toLowerCase()
                                .replace(/\s/g, "-")}`
                            );
                          }
                        }}
                      >
                        {subItem}
                      </a>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Stack>

          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            resetFilter={() => setSelectedSubItem("all")}
          />
        </Toolbar>
      </AppBar>

      {/* ✅ Top Selling Section */}
      <Box
        sx={{
          bgcolor: "#ffeaf3",
          borderRadius: 3,
          boxShadow: 2,
          mb: 5,
          px: { xs: 2, md: 6 },
          py: { xs: 3, md: 4 },
          display: "flex",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
          minHeight: { xs: 120, md: 180 },
        }}
      >
        <LocalOfferIcon sx={{ color: "#e94bb6", fontSize: 48, mr: 3 }} />
        <Stack direction="row" spacing={5} sx={{ flexWrap: "wrap" }}>
          {topSelling.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                minWidth: { xs: 180, md: 260 },
                p: 2,
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 2,
                  objectFit: "cover",
                  boxShadow: 2,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#e94bb6", mb: 0.5 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#222", fontWeight: "bold" }}
                >
                  {item.price}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#81c784", fontWeight: "bold", mb: 0.5 }}
                >
                  {item.discount} {item.info && `| ${item.info}`}
                </Typography>
                <Typography variant="body2" sx={{ color: "#888" }}>
                  Special offer ends soon. Shop now!
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* ✅ Item Grid */}
      <Container maxWidth={false} sx={{ p: 2, mt: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridAutoRows: "350px",
            gap: 2,
          }}
        >
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              sx={{
                bgcolor: "#ffeaf3",
                borderRadius: 3,
                boxShadow: 2,
                cursor: "pointer",
                transition: "box-shadow 0.2s",
                "&:hover": { boxShadow: 6 },
              }}
              onClick={() => {
                const itemId = item.link
                  ? item.link.split("/").pop()
                  : item.id;
                navigate(`/${categoryTitle.toLowerCase()}/${itemId}`);
              }}
            >
              <CardMedia
                component="img"
                height="270"
                image={item.image}
                alt={item.title}
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    color: "#222",
                    textAlign: "center",
                    fontSize: "1rem",
                  }}
                >
                  {item.title}
                </Typography>

                {/* ✅ Show Price with Units */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#e94bb6",
                    fontWeight: "bold",
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  {item.price}
                </Typography>

                {item.description && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#888",
                      mb: 1,
                      textAlign: "center",
                    }}
                  >
                    {item.description}
                  </Typography>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: "#e94bb6",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: 2,
                    mt: 1,
                    "&:hover": { bgcolor: "#d13ca0" },
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const itemId = item.link
                      ? item.link.split("/").pop()
                      : item.id;
                    navigate(`/${categoryTitle.toLowerCase()}/${itemId}`);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* ✅ Dropdown Hover Styles */}
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
    </Box>
  );
};

export default CategoryPage;
