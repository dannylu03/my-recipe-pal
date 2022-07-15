import { Heading, Box, Text, VStack, StackDivider } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/NavBar";
import RecipeCard from "./RecipeCard";
const RecipeHomePage = () => {
  // Dynamically generate this from Database
  const recipes = ["Boobs", "Chocolate", "Vanilla"];

  return (
    <>
      <Navbar />
      <Box>
        <VStack mt={15} divider={<StackDivider borderColor="gray.200" />}>
          <Heading mb={20}>
            <Text>Your Recipes</Text>
          </Heading>
          {recipes.map((recipe) => (
            <RecipeCard>{recipe}</RecipeCard>
          ))}

          {/* <RecipeCard /> */}
        </VStack>
      </Box>
    </>
  );
};

export default RecipeHomePage;
