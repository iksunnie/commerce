import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import NextLink from "./next-link";

export default function Footer() {
  return (
    <VStack
      w={"full"}
      h={"auto"}
      borderTop={"1px solid black"}
      bgColor={"white"}
      p={"20px"}
      spacing={"20px"}
    >
      <HStack w={"full"} justify={"space-between"} align={"start"}>
        <VStack align={"start"} justify={"space-between"}>
          <Text fontWeight={"extrabold"}>THE BEST</Text>
          <VStack align={"start"}>
            <NextLink href={"/shop"} _hover={{ textDecor: "underline" }}>
              <Text>SHOP</Text>
            </NextLink>
          </VStack>
        </VStack>
        <Text
          fontStyle={"italic"}
          fontWeight={"bold"}
          whiteSpace={"pre-line"}
          textAlign={"right"}
        >
          {"WHATEVER WILL BE, WILL BE.\nTHAT'S WHY WE ARE THE BEST."}
        </Text>
      </HStack>
      <Text textAlign={"center"} fontSize={"12px"}>
        © 2024 THE BEST ALL RIGHTS RESERVED.
      </Text>
    </VStack>
  );
}
