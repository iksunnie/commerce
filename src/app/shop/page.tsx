"use client";

import Footer from "@/components/footer";
import NextLink from "@/components/next-link";
import SearchInput from "@/components/search-input";
import { NEW_PRODUCTS } from "@/constants/product";

import {
  AspectRatio,
  Box,
  Center,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ShopPage() {
  return (
    <Flex
      flexDir={["column", null, null, "row"]}
      as={"main"}
      w={"full"}
      h={"100dvh"}
      overflowX={"hidden"}
    >
      {/* aside */}
      <Center
        as="aside"
        flexDir={"column"}
        w={["100%", null, null, "35%"]}
        minW={["100%", "400px"]}
        h={"100%"}
        minH={["800px", null, null, "100%"]}
        borderRight={["none", null, null, "1px solid black"]}
        borderBottom={["1px solid black", null, null, "none"]}
        pt={"72px"}
        px={"20px"}
        pos={"relative"}
        _before={{
          content: '""',
          bgImage: "/product/side.png",
          bgRepeat: "no-repeat",
          bgPos: ["top", null, null, "center"],
          bgSize: "cover",
          opacity: 0.8,
          // top: ["72px", null, null, 0],
          top: "72px",
          left: 0,
          right: 0,
          bottom: 0,
          pos: "absolute",
          zIndex: 0,
        }}
      >
        <Text
          fontSize={"110px"}
          fontWeight={"extrabold"}
          color={"white"}
          isolation={"isolate"}
        >
          {"SHOP"}
        </Text>
        <Text
          isolation={"isolate"}
          fontSize={"20px"}
          fontWeight={"bold"}
          wordBreak={"keep-all"}
          color={"white"}
          textAlign={"center"}
        >
          {
            "Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industry's standard dummy text."
          }
        </Text>
      </Center>
      {/* section */}
      <VStack
        as={"section"}
        w={["100%", null, null, "70%"]}
        pt={["60px", null, null, `calc(72px + 20px)`]}
        align={"start"}
        spacing={"20px"}
      >
        {/* search */}
        <Box
          px={"20px"}
          w={["100%", "70%", null, "60%", "40%"]}
          alignSelf={"end"}
        >
          <SearchInput />
        </Box>
        {/* products */}
        <SimpleGrid
          columns={[1, null, 2, 2, 3]}
          overflow={"auto"}
          w={"100%"}
          h={"100%"}
          px={"20px"}
          pb={"100px"}
          gap={"20px"}
          gridTemplateRows={"fit-content"}
        >
          {[...NEW_PRODUCTS].map((product, productIdx) => {
            return (
              <NextLink
                key={`product-${productIdx}`}
                href={`/shop/${productIdx}`}
                w={"100%"}
                h={"fit-content"}
              >
                <VStack spacing={0} align={"center"} w={"100%"}>
                  <AspectRatio ratio={1} w={"100%"}>
                    <Image
                      src={product.image}
                      alt="image1"
                      objectFit={"cover"}
                    />
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
                          colorScheme={
                            product.badge === "NEW" ? "pink" : "cyan"
                          }
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
        {/* footer */}
        <Footer />
      </VStack>
    </Flex>
  );
}
