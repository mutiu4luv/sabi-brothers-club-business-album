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
import skipo from "../../assets/skipo.jpeg";
import edu from "../../assets/edu.jpg";
import kendo from "../../assets/kendo.jpeg";
import ezege from "../../assets/ezege.jpeg";

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
        "Originally from Umubu - Umuowa, Orlu L.G.A in Imo State. I am a driven individual with a passion for success, adventure, and social engagement. I specialize in  surveying, Realtor, Logistics,Car dealer, Forex/crypto trader,Foreign trader  , as well as providing professional bouncer and security services for events and private functions. With a strong work ethic and a commitment to excellence, I strive to deliver top-notch services across all these fields.",
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
        "i'm a passionate and results-driven full-stack web developer with a strong background in building dynamic, responsive, and user-friendly websites. With expertise in both frontend and backend technologies, I craft seamless digital experiences from concept to deployment. Specializing in tools like React, Node.js, Express, MongoDB, and Material-UI, I build applications that are not only visually appealing but also powerful under the hood. I am committed to clean code, scalable architecture, and delivering real-world solutions that solve problems and add value. Whether it's developing user interfaces, implementing RESTful APIs, integrating payment systems like Paystack, or managing authentication and database operations, I bring dedication, creativity, and technical excellence to every project. In addition to software development, I am also actively involved in real estate offering trusted services in property sourcing, buying, and selling.",
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
    {
      id: 3,
      name: " Ndukuba Clement.C",
      description:
        ": I'm a fashion designer passionate about crafting garments and handmade footwears that blend innovation, elegance, and individuality. With a distinct eye for detail and a love for creative expressions,I bring visions to life through bespoke designs and footwears that make a statement. I am also passionate about social engagement,adventures.In addition to fashion…I’m also actively present in international trading,Event planning. I bring excellence and creativity to all projects.",
      owner: "Ndukuba Clement.C",
      image: skipo,
      services: [
        "Fashion Designing.",
        "Handmade footwears.",
        "International trading.",
        "Event planning.",
        "Social Engagement.",
      ],
      phone: " 08145866583",
      email: "ndukubaclems@gmail.com",
    },
    {
      id: 4,
      name: "  Surv. Omekam Chiedu Chinonso",
      description:
        "Surv Edu also known as (Big Fish) is a SURCON Registered Surveyor passionate about the built industry. He is the Chief Executive Officer of Epic Surveys and Mapping Services a Frontline firm in the fields of Property, Engineering, Construction and Hydrographic Surveys. Surv. Edu is also a well sort GIS Expert and a Data Analyst who specializes in the production of various kinds of Maps, Charts and Specialized graphs. He has most recently ventured into the frozen food and food stuff business with his outlet at No. 4 Alaenyi Str behind Cherubim Junction off Wethedral Road Owerri.",
      owner: " Surv. Omekam Chiedu Chinonso also known as Big Fish",
      image: edu,
      services: [
        "Registered Surveyor.",
        "Real Estate Consultant",
        " GIS Analyst.",
        "frozen food and food stuff vendor.",
        // "Social Engagement.",
      ],
      phone: "   08136454460",
      email: "surv.edu@gmail.com",
    },
    {
      id: 4,
      name: "  Nwauba Kennedy Nnaemeka ",
      description:
        "My name is Nwauba Kennedy Nnaemeka, an experienced and passionate IT professional with a strong background in teaching Computer Science, Graphic designing and providing IT support services. I design birthday, wedding, party  award cards/flyers .With a deep understanding of both theory and practical applications, I have dedicated my career to empowering individuals and organizations through technology.As a Computer Science teacher, I specialize in breaking down complex computer concepts into simple, engaging lessons for students of various levels. I take pride in nurturing digital literacy and ensuring that learners not only understand computer fundamentals but also gain hands-on experience with tools and applications relevant to today’s tech-driven world.In addition to teaching, I am a creative graphics designer, skilled in creating visually appealing and professional designs for both print and digital platforms. From branding materials to social media graphics, I bring ideas to life with precision and creativity.I also work as an IT support staff, where I handle system troubleshooting, network setup, software installation, and general technical assistance. I ensure smooth and efficient use of technology in both educational and professional environments.With a versatile IT skill set and a passion for problem-solving, I continue to grow in the ever-evolving tech space while helping others unlock the power of technology.",
      owner: " Nwauba Kennedy Nnaemeka ",
      image: kendo,
      services: [
        "Computer Science Teacher",
        "Graphic Designer",
        "   iT Support Staff",
        "Birthday, Wedding, Party and Award Cards/Flyers Designer",
        " Social Engagement",
      ],
      phone: "   08136454460",
      email: "surv.edu@gmail.com",
    },
    {
      id: 5,
      name: "Amaogu David Chibuzor, aka Macdavid Computers(Ezege 1) ",
      description:
        "I am a passionate and versatile IT consultant with a strong background in both hardware and software support, offering practical solutions to everyday tech challenges. My expertise spans the sales and repair of laptops and essential accessories, ensuring clients get the best value and reliable service.Beyond technology, I am a gifted instrumentalist—proficient in playing the harmonica, konga, and piano. As a tenor singer with a flair for performance, I bring life to any gathering through music and rhythm, often pairing my sound with strategic dance expressions that captivate audiences. As a charismatic Master of Ceremonies (MC), I anchor events such as weddings, birthdays, and memorials with professionalism, humor, and presence ensuring that every moment remains unforgettable. Nicknamed (The Philosopher,) I am deeply curious about life, constantly in pursuit of truth, knowledge, and wisdom. This mindset also fuels my recent journey into the financial world, where I’m a new but enthusiastic learner in forex and cryptocurrency trading.Currently, I am expanding my skills in data analysis, driven by a desire to harness data for insights, storytelling, and decision-making in today's digital economy.Whether it's through technology, art, finance, or thought leadership I bring creativity, depth, and a learner’s spirit to every endeavor.",
      owner: " Nwauba Kennedy Nnaemeka ",
      image: ezege,
      services: [
        "IT consultancy (hardware and software)",
        "Laptop sales and repairs",
        "Laptop accessories supply",
        "Musical performance (Harmonica, Konga, Piano)",
        "Tenor vocal performance",
        "Strategic dance entertainment",
        "Master of Ceremonies (weddings, birthdays, burials, etc.)",
        "Philosophical content creation / motivational speaking",
        "Forex and cryptocurrency trading (beginner level)",
        "Data analysis (learning stage)",
      ],
      phone: "   08108002904",
      email: " davidamaogu042@gmail.com",
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
