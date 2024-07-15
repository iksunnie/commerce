import React from "react";
import NextLink from "./next-link";
import { Button, ButtonProps } from "@chakra-ui/react";
import { LinkProps } from "@chakra-ui/next-js";

export default function ViewButton({
  href,
  children,
  ...buttonProps
}: LinkProps & ButtonProps) {
  return (
    <NextLink href={href}>
      <Button
        w={"140px"}
        h={"50px"}
        variant={"outline"}
        border={"2px solid white"}
        borderRadius={0}
        _hover={{
          bgColor: "rgba(255, 255, 255, 0.2)",
        }}
        color={"white"}
        fontSize={"18px"}
        fontWeight={"extrabold"}
        {...buttonProps}
      >
        {children}
      </Button>
    </NextLink>
  );
}
