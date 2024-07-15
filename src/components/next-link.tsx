"use client";

import { Link, LinkProps } from "@chakra-ui/next-js";

export default function NextLink({ href, children, ...linkProps }: LinkProps) {
  return (
    <Link href={href} _hover={{ textDecor: "none" }} {...linkProps}>
      {children}
    </Link>
  );
}
