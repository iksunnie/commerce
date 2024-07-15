import { Button, ButtonProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export type SizeType = "XS" | "S" | "M" | "L" | "XL";

export const SIZE_VARIANTS: SizeType[] = ["XS", "S", "M", "L", "XL"];

export default function SizeButton({
  value,
  size,
  onClick,
  children,
  ...props
}: PropsWithChildren<
  {
    value: SizeType | undefined;
    size: SizeType | undefined;
    onClick: () => void;
  } & ButtonProps
>) {
  return (
    <Button
      variant={"outline"}
      border={"1px solid black"}
      color={size === value ? "white" : "black"}
      bgColor={size === value ? "black" : "white"}
      borderRadius={0}
      _hover={{
        bgColor: size === value ? "black" : "white",
        color: size === value ? "white" : "black",
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}
