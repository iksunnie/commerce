"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles(required)
import "swiper/css";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import { BANNER_LIST } from "@/constants/banner";
import ViewButton from "./view-button";

export default function Banner() {
  return (
    <Box w={"full"} h={"auto"} borderBottom={"1px solid black"}>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {BANNER_LIST.map(({ id, title, image, link }) => {
          return (
            <SwiperSlide key={`slide-${id}`}>
              <HStack
                h={"80dvh"}
                justify={"space-between"}
                px={"20px"}
                pos={"relative"}
                _before={{
                  content: '""',
                  bgImage: image,
                  bgRepeat: "no-repeat",
                  bgPos: "center",
                  bgSize: "cover",
                  opacity: 0.8,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  pos: "absolute",
                  zIndex: 0,
                }}
              >
                <VStack align={"center"} w={"100%"} isolation={"isolate"}>
                  <Text
                    color={"white"}
                    textAlign={"center"}
                    fontSize={["80px", null, null, "110px"]}
                    fontWeight={"extrabold"}
                    whiteSpace={"pre-line"}
                  >
                    {title}
                  </Text>
                  <ViewButton href={link}>VIEW ALL</ViewButton>
                </VStack>
              </HStack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
