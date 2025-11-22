import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Home() {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        className="h-screen"
      >
        <SwiperSlide>
          <div className="ml-[128px] mt-36 flex flex-col">
            <div className="flex flex-row items-center ">
              <h1 className="font-machina text-[64px] w-[582px] leading-[100%]">
                The new generation of smart and secure infrastrucure is
                <span className="font-extrabold">here</span>.
              </h1>

              <img
                src="/images/homePageGif.gif"
                alt="gif"
                className="w-[366px] h-[366px]"
              />
            </div>

            <p className="font-grotesk text-[20px] w-[582px] ">
              The best infrastructures helps you provide your customers the best
              services in a best way.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="ml-[128px] mt-36 flex flex-col">
            <div className="flex flex-row items-center">
              <h1 className="font-machina text-[64px] w-[582px] leading-[100%]">
                The new generation of smart and secure infrastrucure is
                <span className="font-extrabold">here</span>.
              </h1>

              <img
                src="/images/homepagegif.gif"
                alt="gif"
                className="w-[366px] h-[366px]"
              />
            </div>

            <p className="font-grotesk text-[20px] w-[582px] ">
              The best infrastructures helps you provide your customers the best
              services in a best way.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
        <SwiperSlide>6</SwiperSlide>
      </Swiper>
    </div>
  );
}
