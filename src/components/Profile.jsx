import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

function Profile() {
  return (
    <div>
      <Box
        sx={{
          width: "1000px",
          height: "75px",
          m: "auto",
          backgroundColor: "white",
          color: "#415a77",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h5 style={{ margin: "25px" }}>
          <strong>My Account</strong>
        </h5>
        <div>
          <Button variant="contained" size="small" style={{ margin: "25px" }}>
            Settings
          </Button>
        </div>
      </Box>
      <Box
        sx={{
          width: "1000px",
          height: "600px",
          mr: "auto",
          ml: "auto",
          mb: "50px",
          display: "flex",
          backgroundColor: "#F7FCFF",
          color: "#415a77",
          justifyContent: "center",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Avatar sx={{ mt: "20px", width: 100, height: 100,}}></Avatar>
      </Box>
    </div>
  );
}

export default Profile;
