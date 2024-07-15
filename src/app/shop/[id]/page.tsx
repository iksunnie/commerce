"use client";

import { useParams } from "next/navigation";
import {
  AspectRatio,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NEW_PRODUCTS } from "@/constants/product";
import { useState } from "react";
import SizeButton, { SIZE_VARIANTS, SizeType } from "@/components/size-button";
import NormalButton from "@/components/normal-button";
import Footer from "@/components/footer";

export default function DetailsPage() {
  // get url parameter
  const { id: productId } = useParams<{ id: string }>();
  // destructure
  const { name, image, price, id, material, details } =
    NEW_PRODUCTS[Number(productId)];

  // size state
  const [size, setSize] = useState<SizeType>();

  // size button
  const handleSize = (value: SizeType) => {
    setSize(value);
  };

  return (
    <VStack>
      <Flex
        flexDir={["column", null, null, "row"]}
        as={"main"}
        w={"full"}
        pt={"72px"}
        justify={"center"}
      >
        <VStack
          w={"100%"}
          px={["18px", null, null, "20px"]}
          pt={["30px", null, null, "60px"]}
          spacing={"60px"}
          pb={"120px"}
        >
          {/* top */}
          <Flex
            w={"100%"}
            maxW={"1200px"}
            gap={["20px", null, null, null, "32px"]}
            align={"start"}
            flexDir={["column", null, null, "row"]}
          >
            {/* image */}
            <AspectRatio
              ratio={1}
              maxW={["100%", null, null, "50%"]}
              w={"100%"}
              maxH={"600px"}
              h={"auto"}
              border={"1px solid black"}
            >
              <Image src={image} alt={`product-image-${id}`} w={"100%"} />
            </AspectRatio>
            {/* cart */}
            <VStack w={["100%", null, null, "50%"]}>
              {/* product name */}
              <HStack
                align={"center"}
                justify={"space-between"}
                borderY={"1px solid black"}
                w={"100%"}
              >
                <Text
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  py={["10px", null, null, "20px"]}
                >
                  {name.toUpperCase()}
                </Text>
              </HStack>
              {/* details */}
              <VStack w={"100%"}>
                {/* price */}
                <VStack
                  w={"100%"}
                  py={["10px", null, null, "20px"]}
                  align={"start"}
                >
                  <Text fontWeight={"bold"}>Price</Text>
                  <Text fontWeight={"medium"} fontSize={"14px"}>
                    ${price}
                  </Text>
                </VStack>
                {/* material */}
                <VStack
                  py={["10px", null, null, "20px"]}
                  w={"100%"}
                  align={"start"}
                  justify={"start"}
                >
                  <Text fontWeight={"bold"}>Material</Text>
                  <Text fontWeight={"medium"} fontSize={"14px"}>
                    {material}
                  </Text>
                </VStack>
                {/* cereal no */}
                <VStack
                  py={["10px", null, null, "20px"]}
                  w={"100%"}
                  align={"start"}
                  justify={"start"}
                >
                  <Text fontWeight={"bold"}>Cereal No.</Text>
                  <Text fontWeight={"medium"} fontSize={"14px"}>
                    {id}
                  </Text>
                </VStack>
                {/* size */}
                <VStack
                  w={"100%"}
                  align={"start"}
                  justify={"start"}
                  spacing={"4px"}
                  py={["10px", null, null, "20px"]}
                >
                  <Text fontWeight={"bold"}>Size</Text>
                  <HStack w={"100%"} spacing={"4px"}>
                    {SIZE_VARIANTS.map((value) => {
                      return (
                        <SizeButton
                          key={`product-size-${value}`}
                          size={value}
                          value={size}
                          w={"max-content"}
                          h={"24px"}
                          fontSize={"12px"}
                          onClick={() => handleSize(value)}
                        >
                          {value}
                        </SizeButton>
                      );
                    })}
                  </HStack>
                </VStack>
              </VStack>
              {/* buttons */}
              <VStack w={"100%"} spacing={"4px"}>
                <NormalButton
                  variant={"outline"}
                  w={"100%"}
                  fontWeight={"bold"}
                >
                  ADD TO CART
                </NormalButton>
                <NormalButton
                  variant={"solid"}
                  w={"100%"}
                  isDisabled={!size}
                  fontWeight={"bold"}
                >
                  CHECKOUT
                </NormalButton>
              </VStack>
            </VStack>
          </Flex>

          {/* details */}
          <Flex
            flexDir={["column", null, null, "column"]}
            w={"100%"}
            h={"auto"}
            gap={"60px"}
            border={"1px solid black"}
            p={["18px", null, null, "20px"]}
            pb={"120px"}
          >
            {/* details title */}
            <Center flexDir={"column"} py={["48px", null, null, "60px"]}>
              <Text
                fontSize={["26px", null, "36px", "48px"]}
                fontWeight={"bold"}
              >
                {name.toUpperCase()}
              </Text>
            </Center>
            {/* details banner */}
            <VStack w={"100%"} spacing={"20px"}>
              <AspectRatio
                borderY={"1px solid black"}
                ratio={2 / 1}
                maxW={"100%"}
                w={"100%"}
                maxH={"600px"}
              >
                <Image
                  src={"/banner/0.png"}
                  alt="details-banner"
                  objectFit={"cover"}
                />
              </AspectRatio>
              <VStack spacing={"16px"}>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  {"Lorem Ipsum is simply dummy"}
                </Text>
                <Text
                  textAlign={"center"}
                  maxW={["100%", "80%", null, "50%"]}
                  w={"100%"}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                </Text>
              </VStack>
            </VStack>
            {/* details */}
            <VStack w={"100%"} spacing={"60px"}>
              {details.map((value, idx) => {
                const isEven = !(idx % 2);
                return (
                  <Flex
                    key={`detail-${idx}`}
                    w={"100%"}
                    align={"center"}
                    flexDir={
                      isEven
                        ? ["column", null, "row"]
                        : ["column", null, "row-reverse"]
                    }
                    gap={"32px"}
                    maxW={"1200px"}
                  >
                    <Flex
                      w={["100%", null, null, "50%"]}
                      justify={isEven ? "flex-start" : "flex-end"}
                    >
                      <AspectRatio
                        ratio={1}
                        border={"1px solid black"}
                        maxW={["100%", "80%"]}
                        w={"100%"}
                      >
                        <Image src={value.image} alt={`image-${id}`} />
                      </AspectRatio>
                    </Flex>
                    <Flex
                      justify={isEven ? "flex-start" : "flex-end"}
                      w={["100%", null, null, "50%"]}
                    >
                      <Text maxW={["100%", null, null, "60%"]}>
                        {value.description}
                      </Text>
                    </Flex>
                  </Flex>
                );
              })}
            </VStack>
          </Flex>
        </VStack>
      </Flex>
      <Footer />
    </VStack>
  );
}
