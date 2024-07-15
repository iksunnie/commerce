import { Button, ButtonProps, ResponsiveValue } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

export default function NormalButton({
  variant,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const getStyle = (variant: ResponsiveValue<string> | undefined) => {
    if (variant === "outline") {
      return {
        bgColor: "white",
        color: "black",
        _hover: {
          bgColor: "white",
          color: "black",
        },
      };
    }
    if (variant === "solid") {
      return {
        bgColor: "black",
        color: "white",
        _hover: {
          bgColor: "gray.700",
          color: "white",
        },
      };
    }
  };

  return (
    <Button
      border={"1px solid black"}
      borderRadius={0}
      color={"black"}
      _hover={{
        bgColor: "black",
        color: "white",
      }}
      {...getStyle(variant)}
      {...props}
    >
      {children}
    </Button>
  );
}
