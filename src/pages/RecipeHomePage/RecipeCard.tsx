import { Box, Text } from "@chakra-ui/react";
import React from "react";

type RecipeCardProps = {
  children: any;
};

const RecipeCard = ({ children }: RecipeCardProps) => {
  return (
    <Box m={10}>
      <Text>{children}</Text>
    </Box>
  );
};

export default RecipeCard;
