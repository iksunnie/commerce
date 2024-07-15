"use client";

import { Center, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NextLink from "./next-link";
import { NAV } from "@/constants/nav";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const listener = () => {
      setIsScrolled(window.scrollY > 0);
    };

    listener();
    window.addEventListener("scroll", listener);
    return () => {
      window.addEventListener("scroll", listener);
    };
  });

  return (
    <Center
      pos={"fixed"}
      top={0}
      zIndex={"9999"}
      w={"full"}
      h={"72px"}
      justifyContent={"space-between"}
      px={"20px"}
      bgColor={
        pathname.startsWith("/shop") || isScrolled ? "white" : "transparent"
      }
      borderBottom={
        pathname.startsWith("/shop") || isScrolled ? "1px solid black" : "none"
      }
      transition={
        pathname.startsWith("/shop") || isScrolled ? "all 0.1s ease" : "none"
      }
    >
      <NextLink href={"/"} _hover={{ textDecor: "none" }}>
        <Text fontSize={"40px"} fontWeight={"extrabold"} color={"black"}>
          THE BEST
        </Text>
      </NextLink>
      <HStack as="nav" spacing={"16px"}>
        {NAV.map(({ link, name }, idx) => {
          return (
            <NextLink
              key={`nav-${name}-${idx}`}
              href={link}
              _hover={{ textDecor: "underline" }}
            >
              <Text fontWeight={"extrabold"}>{name}</Text>
            </NextLink>
          );
        })}
      </HStack>
    </Center>
  );
}
