import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Logo = (props: any) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};

export default Logo;
