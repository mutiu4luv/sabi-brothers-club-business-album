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

// Import all image assets
import nonso from "../../assets/nonso.jpeg";
import mutiu from "../../assets/mutiu.jpeg";

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
      name: "Surv. Eunan Chinonso Ndiwe (Apoatle Surveying)",
      description:
        "Originally from Umubu - Umuowa, Orlu L.G.A in Imo State. I am a driven individual with a passion for success, adventure, and social engagement. I specialize in land surveying, real estate services, car sales, forex and crypto trading, as well as international trade. I also provide professional bouncer and security services for events and private functions. With a strong work ethic and a commitment to excellence, I strive to deliver top-notch services across all these fields.",
      owner: "Surv. Eunan Chinonso Ndiwe ",
      image: nonso,
      services: [
        "Land Surveying",
        "Real Estate (Realtor) Services",
        "Car Sales",
        "Forex and Crypto Trading",
        "International Trade",
        "Bouncer and Security Services",
      ],
      phone: "08034861330",
      email: "Smitharmstrong92@gmail.com",
    },
    {
      id: 2,
      name: "Mutiu Software Solutions",
      description:
        "i'm a passionate and results-driven full-stack web developer with a strong background in building dynamic, responsive, and user-friendly websites. With expertise in both frontend and backend technologies, I craft seamless digital experiences from concept to deployment. Specializing in tools like React, Node.js, Express, MongoDB, and Material-UI, I build applications that are not only visually appealing but also powerful under the hood. I am committed to clean code, scalable architecture, and delivering real-world solutions that solve problems and add value. Whether it's developing user interfaces, implementing RESTful APIs, integrating payment systems like Paystack, or managing authentication and database operations, I bring dedication, creativity, and technical excellence to every project.",
      owner: "Madu Chibueze Emmanuel (Mutiu Software Solutions)",
      image: mutiu,
      services: [
        "Full-stack web development",
        "Frontend development (React, Material-UI, HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwind CSS, )",
        "Backend development (Node.js, Express)",
        "Database management (MongoDB)",
        "RESTful API development",
        "Authentication and authorization",
        "Payment integration (Paystack, Stripe, Flutterwave, etc.)",
        "Web application architecture",
        "Responsive web design and development",
        "User experience (UX) design",
        "Web application deployment",
        "Website maintenance and support",
        "E-commerce solutions",
        "Mobile-friendly design",
        "Web Design",
        "Real Estate",
      ],
      phone: "+2347031911306",
      email: "chidiemmamadu@gmail.com",
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
            setPage(1); // reset to first page on new search
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
