"use client";

import React from "react";

import { Flex, HStack, Text, keyframes } from "@chakra-ui/react";

const rollingOrigin = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-100%);
  }
  50.01% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const rollingClone = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
`;

const TextAnimation = () => {
  return (
    <Flex
      as="section"
      alignItems="center"
      position="relative"
      borderY={"1px solid black"}
      zIndex={2}
      w="100%"
      h={"60px"}
      overflow="hidden"
    >
      <HStack
        spacing="36px"
        p="16px 18px"
        animation={`${rollingOrigin} infinite 80s linear`}
      >
        {[...TEXT_ANIMATION, ...TEXT_ANIMATION].map(({ text }, index) => (
          <HStack key={index} spacing="12px">
            <Text color="black" fontWeight={"bold"} whiteSpace="nowrap">
              {text}
            </Text>
          </HStack>
        ))}
      </HStack>
      <HStack
        spacing="36px"
        p="16px 18px"
        animation={`${rollingClone} infinite 80s linear`}
      >
        {[...TEXT_ANIMATION, ...TEXT_ANIMATION].map(({ text }, index) => (
          <HStack key={index} spacing="12px">
            <Text color="black" fontWeight={"bold"} whiteSpace="nowrap">
              {text}
            </Text>
          </HStack>
        ))}
      </HStack>
    </Flex>
  );
};

export default TextAnimation;

const TEXT_ANIMATION = [
  { text: "WHATEVER WILL BE, WILL BE. THAT'S WHY WE ARE THE BEST." },
  { text: "WHATEVER WILL BE, WILL BE. THAT'S WHY WE ARE THE BEST." },
  { text: "WHATEVER WILL BE, WILL BE. THAT'S WHY WE ARE THE BEST." },
];
