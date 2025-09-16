// src/pages/Profile.jsx
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Avatar,
  Box,
  TextField,
  Button,
  Stack,
  Paper,
  IconButton,
  Divider,
  Card,
  CardContent,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+94 77 123 4567",
    address: "Colombo, Sri Lanka",
  });
  const [editMode, setEditMode] = useState(false);
  const [savedUser, setSavedUser] = useState(user);

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSave = () => {
    setEditMode(false);
    setSavedUser(user); // Save changes temporarily in memory
    console.log("Updated user:", user);
  }
  const handleCancel = () => {
    setEditMode(false);
    setUser(savedUser); // Revert to last saved state
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: "#fafafd",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Card elevation={8} sx={{
          borderRadius: 3,
          bgcolor: "#ffeaf3",
          boxShadow: 2,
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Banner */}
          <Box
            sx={{
              height: 140,
              backgroundImage: `url("/profile-banner.jpg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            {/* Back Button */}
            <IconButton
              sx={{ position: 'absolute', top: 16, left: 16, zIndex: 10, bgcolor: 'rgba(255,255,255,0.7)' }}
              onClick={() => navigate(-1)}
              color="primary"
            >
              <ArrowBackIcon />
            </IconButton>
            {/* Edit Button */}
            <IconButton
              sx={{ position: 'absolute', top: 16, right: 16, zIndex: 10, bgcolor: 'rgba(255,255,255,0.7)' }}
              onClick={() => setEditMode(!editMode)}
              color="primary"
            >
              <EditIcon />
            </IconButton>
            {/* Avatar */}
            <Avatar
              src={editMode ? "/your-new-image.jpg" : undefined} // Show image only if you want, else fallback to initial
              sx={{
                width: 100,
                height: 100,
                position: 'absolute',
                left: '50%',
                bottom: -50,
                transform: 'translateX(-50%)',
                boxShadow: 4,
                bgcolor: "#e94bb6",
                color: "#fff",
                fontSize: 40,
                border: '4px solid #fff',
              }}
            >
              {!editMode && user.name.charAt(0)}
            </Avatar>
          </Box>
          <CardContent sx={{ pt: 7 }}>
            <Typography variant="h4" fontWeight="bold" align="center" sx={{ mb: 1, color: "#e94bb6" }}>
              {user.name}
            </Typography>
            <Typography variant="subtitle2" align="center" sx={{ mb: 2, color: "#888" }}>
              User Profile
            </Typography>
            <Divider sx={{ mb: 3 }} />
            {/* Content section */}
            {editMode ? (
              <Stack spacing={3}>
                <TextField label="Name" name="name" value={user.name} onChange={handleChange} fullWidth />
                <TextField label="Email" name="email" value={user.email} onChange={handleChange} fullWidth />
                <TextField label="Phone" name="phone" value={user.phone} onChange={handleChange} fullWidth />
                <TextField label="Address" name="address" value={user.address} onChange={handleChange} fullWidth />
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                    sx={{
                      bgcolor: "#e94bb6",
                      color: "#fff",
                      fontWeight: "bold",
                      px: 4,
                      boxShadow: 2,
                      borderRadius: 2,
                      '&:hover': { bgcolor: "#d13ca0" }
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CancelIcon />}
                    onClick={handleCancel}
                    sx={{
                      px: 4,
                      borderRadius: 2,
                      color: "#e94bb6",
                      borderColor: "#e94bb6",
                      fontWeight: "bold",
                      '&:hover': { borderColor: "#d13ca0", color: "#d13ca0" }
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            ) : (
              <Stack spacing={2} alignItems="center">
                <Typography variant="body1" sx={{ color: "#222" }}>
                  <strong>Email:</strong> {user.email}
                </Typography>
                <Typography variant="body1" sx={{ color: "#222" }}>
                  <strong>Phone:</strong> {user.phone}
                </Typography>
                <Typography variant="body1" sx={{ color: "#222" }}>
                  <strong>Address:</strong> {user.address}
                </Typography>
              </Stack>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Profile;
