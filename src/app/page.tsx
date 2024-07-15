import { VStack } from "@chakra-ui/react";

import { NEW_PRODUCTS } from "../constants/product";
import MainSection from "@/components/main-section";
import TextAnimation from "@/components/text-animation";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <VStack
      overflowX={"hidden"}
      as={"main"}
      w="full"
      align={"center"}
      spacing={"60px"}
      // {...checkBreakpoints}
    >
      <Banner />
      <TextAnimation />
      <VStack spacing={"120px"} w={"100%"}>
        <MainSection
          title={"NEW PRODUCTS"}
          sectionLink="/shop"
          data={NEW_PRODUCTS}
        />
        <MainSection
          title={"SUMMER PRODUCTS"}
          sectionLink={"/shop"}
          data={NEW_PRODUCTS}
        />
      </VStack>
      <Footer />
    </VStack>
  );
}
