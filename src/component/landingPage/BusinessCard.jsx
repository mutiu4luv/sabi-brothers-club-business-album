import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Stack,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Container,
  Button,
  Pagination,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// Import all image assets
import nonso from "../../assets/nonso.jpeg";
import mutiu from "../../assets/mutiu.jpeg";
import skipo from "../../assets/skipo.jpeg";
import edu from "../../assets/edu.jpg";
import kendo from "../../assets/kendo.jpeg";
import ezeke from "../../assets/ezeke.jpeg";
import chinachris from "../../assets/chinachris.jpeg";

const BusinessCard = () => {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [page, setPage] = useState(1);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const cardsPerPage = isSmallScreen ? 50 : 100;

  const businesses = [
    {
      id: 1,
      name: "Surv. Eunan Chinonso Ndiwe ",
      description:
        "Originally from Umubu - Umuowa, Orlu L.G.A in Imo State. I am a driven individual with a passion for success...",
      owner: "Surv. Eunan Chinonso Ndiwe ",
      image: nonso,
      services: ["Surveyor", "Realtor", "Car Dealer"],
      phone: "08034861330",
      email: "Smitharmstrong92@gmail.com",
      facebook: "https://www.facebook.com/share/1GP91iFasz/",
      whatsapp: "+2348034861330",
    },
    {
      id: 2,
      name: "Mutiu Software Solutions",
      description:
        "I'm a passionate and results-driven full-stack web developer...",
      owner: "Madu Chibueze Emmanuel",
      image: mutiu,
      services: ["Web Design", "Real Estate", "API Integration"],
      phone: "+2347031911306",
      email: "chidiemmamadu@gmail.com",
      facebook: "https://m.facebook.com/emmanuelmutiu",
      whatsapp: "+2347031911306",
    },
    {
      id: 3,
      name: "Ndukuba Clement.C",
      description:
        "I'm a fashion designer passionate about crafting garments...",
      owner: "Ndukuba Clement.C",
      image: skipo,
      services: ["Fashion Designing", "Footwear", "Trading"],
      phone: "08145866583",
      email: "ndukubaclems@gmail.com",
      whatsapp: "+2348145866583",
      instagram: "https://instagram.com/plushman_1",
      Instagrams: "https://instagram.com/clemsmorganz",
    },
    {
      id: 4,
      name: "Surv. Omekam Chiedu Chinonso",
      description: "Surv Edu also known as (Big Fish)...",
      owner: "Surv. Omekam Chiedu Chinonso",
      image: edu,
      services: ["Surveyor", "GIS", "Frozen Food Vendor"],
      phone: "08136454460",
      email: "surv.edu@gmail.com",
      whatsapp: "08136454460",
    },
    {
      id: 5,
      name: "Nwauba Kennedy Nnaemeka",
      description:
        "My name is Nwauba Kennedy Nnaemeka, an experienced IT professional...",
      owner: "Nwauba Kennedy Nnaemeka",
      image: kendo,
      services: ["Graphic Design", "IT Support", "Card Design"],
      phone: "08038116742",
      email: "nwaubakennedy@gmail.com",
      facebook: "https://www.facebook.com/kennedy.nwauba",
      whatsapp: "+2348038116742",
    },
    {
      id: 6,
      name: "Amaogu David Chibuzor",
      description: "I am a passionate and versatile IT consultant...",
      owner: "Amaogu David Chibuzor",
      image: ezeke,
      services: ["Laptop Repairs", "MC", "Music", "Philosophy"],
      phone: "08108002904",
      email: "davidamaogu042@gmail.com",
    },
    {
      id: 7,
      name: "Chinedu Christopher (CHINACHRIS)",
      description: "I am a passionate and versatile entrepreneur...",
      owner: "Chinedu Christopher",
      image: chinachris,
      services: ["Event Planning", "Real Estate", "Baking"],
      phone: "07038740080",
      email: "chinachris835@gmail.com",
      facebook: "https://m.facebook.com/chinachris.christopher/",
      whatsapp: "+2347038740080",
    },
  ];

  const filteredBusinesses = businesses.filter((biz) =>
    biz.services.some((service) =>
      service.toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredBusinesses.length / cardsPerPage);
  const paginatedBusinesses = filteredBusinesses.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage
  );

  const toggleReadMore = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="center" mb={4}>
        <TextField
          label="Search by Service"
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          sx={{ width: "100%", maxWidth: 400 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton disabled>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {paginatedBusinesses.length > 0 ? (
          paginatedBusinesses.map((business) => {
            const isExpanded = expandedId === business.id;
            const shortText = business.description.length < 120;

            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={business.id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    mx: "auto",
                    height: "100%",
                    minHeight: 520,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="350"
                    image={business.image}
                    alt={business.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {business.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: isExpanded ? "none" : 3,
                      }}
                    >
                      {business.description}
                    </Typography>
                    {!shortText && (
                      <Button
                        size="small"
                        sx={{ mt: 1 }}
                        onClick={() => toggleReadMore(business.id)}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </Button>
                    )}

                    <Box mt={2}>
                      <Typography variant="subtitle2" gutterBottom>
                        Services:
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        flexWrap="wrap"
                      >
                        {business.services.map((service, index) => (
                          <Chip
                            key={index}
                            label={service}
                            size="small"
                            color="error"
                          />
                        ))}
                      </Stack>
                    </Box>

                    <Box mt={2}>
                      <Typography variant="caption" color="text.secondary">
                        Owner: {business.owner}
                      </Typography>
                      {business.phone && (
                        <Typography variant="caption" color="text.secondary">
                          <br />
                          Phone:{" "}
                          <a
                            href={`tel:${business.phone}`}
                            style={{ color: "#1976d2", textDecoration: "none" }}
                          >
                            {business.phone}
                          </a>
                        </Typography>
                      )}
                      {business.email && (
                        <Typography variant="caption" color="text.secondary">
                          <br />
                          Email:{" "}
                          <a
                            href={`mailto:${business.email}`}
                            style={{ color: "#1976d2", textDecoration: "none" }}
                          >
                            {business.email}
                          </a>
                        </Typography>
                      )}

                      <Box mt={1} display="flex" gap={2}>
                        {business.whatsapp && (
                          <IconButton
                            component="a"
                            href={`https://wa.me/${business.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="success"
                          >
                            <WhatsAppIcon />
                          </IconButton>
                        )}
                        {business.facebook && (
                          <IconButton
                            component="a"
                            href={business.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                          >
                            <FacebookIcon />
                          </IconButton>
                        )}
                        {(business.instagram || business.Instagram) && (
                          <IconButton
                            component="a"
                            href={
                              business.instagram?.startsWith("http")
                                ? business.instagram
                                : `https://instagram.com/${
                                    business.instagram || business.Instagram
                                  }`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            color="secondary"
                          >
                            <InstagramIcon />
                          </IconButton>
                        )}
                        {(business.Instagrams || business.Instagrams) && (
                          <IconButton
                            component="a"
                            href={
                              business.Instagrams?.startsWith("http")
                                ? business.Instagrams
                                : `https://instagram.com/${
                                    business.Instagrams || business.Instagrams
                                  }`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            color="secondary"
                          >
                            <InstagramIcon />
                          </IconButton>
                        )}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Typography textAlign="center" sx={{ width: "100%" }}>
            No businesses found for: "{search}"
          </Typography>
        )}
      </Grid>

      {totalPages > 1 && (
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Container>
  );
};

export default BusinessCard;
