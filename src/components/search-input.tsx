"use client";

import { HStack, IconButton, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function SearchInput() {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <HStack as={"label"} spacing={"4px"}>
      <Input
        placeholder="Search your the best."
        _placeholder={{
          color: "gray.600",
          fontStyle: "italic",
        }}
        border={"1px solid black"}
        borderRadius={0}
        _hover={{
          border: "1px solid black",
        }}
        _focusVisible={{
          outline: "none",
          border: "1px solid black",
        }}
      />
      <IconButton
        type="button"
        aria-label="Search Button"
        icon={<SearchIcon color={hover ? "white" : "black"} />}
        border={"1px solid black"}
        borderRadius={0}
        bgColor={"white"}
        _hover={{
          bgColor: "black",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </HStack>
  );
}
