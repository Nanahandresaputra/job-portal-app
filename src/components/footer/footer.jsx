import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Footer = () => {
  let { listJob, jobById } = useSelector((state) => state.job);
  // let positionFooter = "";
  // if (listJob.length > 0) {
  //   positionFooter = "relative";
  // }
  // if (jobById.length > 0) {
  //   positionFooter = "relative";
  // } else {
  //   positionFooter = "fixed";
  // }
  return (
    <Box width="100%" position={listJob.length > 0 ? "static" : jobById.length > 0 ? "relative" : "fixed"} bottom={0} sx={{ bgcolor: "primary.dark", py: "2vh" }}>
      <Container>
        <Typography component="p" color="secondary.main" fontStyle="italic" align="center">
          &copy; Jobs Portal, By Nana handre saputra
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
