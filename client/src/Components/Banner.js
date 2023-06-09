import {
  Card,
  Box,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";
function Banner() {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="450"
          image="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
          alt="Paella dish"
          sx={{ objectPosition: "bottom", position: "relative" }}
        />
        <Typography
          sx={{
            position: "absolute",
            top: "20%",
            width: "100%",
            textAlign: "center",
            color: "black",
            backgroundColor: "none",
          }}
          variant="h3"
        >
          Refly
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            width: "100%",
            textAlign: "center",
            color: "black",
            backgroundColor: "none",
          }}
        >
          <form>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Box
                p="10px"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <TextField
                  sx={{ backgroundColor: "white" }}
                  label="Test"
                  variant="filled"
                />
                <TextField label="Filled" variant="filled" />
                <TextField
                  placeholder="Test"
                  variant="filled"
                  sx={{ backgroundColor: "white" }}
                />
                <TextField
                  placeholder="Test"
                  variant="filled"
                  sx={{ backgroundColor: "white" }}
                />
                <Button variant="outlined">Search</Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Card>
    </div>
  );
}

export default Banner;
