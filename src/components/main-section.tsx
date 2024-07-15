"use client";

import {
  AspectRatio,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ProductType } from "@/types/product";
import NextLink from "./next-link";

export default function MainSection({
  title,
  sectionLink,
  data,
}: {
  title: string;
  sectionLink: string;
  data: ProductType[];
}) {
  return (
    <VStack w={"100%"} px={"20px"} spacing={"36px"} align={"center"}>
      <Text fontSize={"30px"} fontWeight={"bold"}>
        {title}
      </Text>
      {/* <HStack > */}
      <SimpleGrid columns={[1, null, 2, 2, 4]} w={"100%"} gap={"20px"}>
        {data.map((product, idx) => {
          return (
            <NextLink key={`product-${idx}`} href={`/shop/${idx}`} w={"100%"}>
              <VStack
                spacing={0}
                align={"center"}
                w={"100%"}
                border={"1px solid black"}
              >
                <AspectRatio
                  ratio={1}
                  w={"100%"}
                  borderBottom={"1px solid black"}
                >
                  <Image src={product.image} alt="image1" objectFit={"cover"} />
                </AspectRatio>
                <VStack align={"center"} p={"10px 20px"} spacing={"4px"}>
                  <HStack align={"center"}>
                    <Text
                      fontWeight={"bold"}
                      textAlign={"center"}
                      noOfLines={1}
                    >
                      {product.name}
                    </Text>
                    {product.badge !== "NONE" && (
                      <Tag
                        minW={"max-content"}
                        colorScheme={product.badge === "NEW" ? "pink" : "cyan"}
                        fontSize={"10px"}
                      >
                        {product.badge}
                      </Tag>
                    )}
                  </HStack>
                  <Text>{`$${product.price}`}</Text>
                </VStack>
              </VStack>
            </NextLink>
          );
        })}
      </SimpleGrid>
      {/* </HStack> */}

      <NextLink href={sectionLink}>
        <Button
          w={"140px"}
          h={"40px"}
          variant={"outline"}
          border={"1px solid black"}
          borderRadius={0}
          color={"black"}
          fontSize={"18px"}
          fontWeight={"bold"}
          _hover={{
            bgColor: "black",
            color: "white",
          }}
        >
          VIEW ALL
        </Button>
      </NextLink>
    </VStack>
  );
}
