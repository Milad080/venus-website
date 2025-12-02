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
        className="max-h-[440px] md:max-h-[500px] xl:max-h-max"
      >
        <SwiperSlide>
          <div className="xl:ml-[128px] md:ml-3 mt-12 xl:mt-36 flex flex-col">
            <div className="grid grid-cols-[1fr_1fr] items-center justify-center">
              <h1 className="font-machina mb-2 text-[22px] min-[450px]:text-[30px] lg:text-[36px] xl:text-[52px] min-[1350px]:text-[64px] xl:w-[582px] leading-[100%]">
                The new generation of smart and secure infrastrucure is
                <span className="font-extrabold">here</span>.
              </h1>
              <div className="flex justify-center xl:justify-start">
                <img
                  src="images/homePageGif.gif"
                  alt="gif"
                  className="max-w-[256px] sm:max-[280px] md:max-w-[290px] w-full object-contain xl:max-w-[366px]"
                />
              </div>
            </div>
            <p className="font-grotesk xl:mb-32 font-light text-[11px] sm:text-[13px] md:text-[15px] xl:text-[20px] max-w-[328px] xl:max-w-[582px] ">
              The best infrastructures helps you provide your customers the best
              services in a best way.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="xl:ml-[128px] mt-36 flex flex-col">
            <div className="grid grid-cols-[1fr_2fr] items-center">
              <h1 className="font-machina text-[22px] xl:text-[64px] xl:w-[582px] leading-[100%]">
                The new generation of smart and secure infrastrucure is
                <span className="font-extrabold">here</span>.
              </h1>
              <img
                src="images/homePageGif.gif"
                alt="gif"
                className="xl:max-w-[366px] xl:max-h-[366px]"
              />
            </div>

            <p className="font-grotesk text-[14px] xl:text-[20px] max-w-[328px] xl:mx-w-[582px] ">
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
