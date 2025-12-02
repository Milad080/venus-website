import Button from "../../ui/Button";

function AboutVenus() {
  return (
    <div className="grid grid-cols-[1.3fr_2fr] items-center bg-black xl:h-[730px] sm:mt-24 justify-center xl:mt-0 xl:gap-40">
      <div className="flex flex-col ml-3 py-4 px-7 xl:ml-[118px] xl:mt-0 xl:px-0 xl:py-0">
        <h2 className="font-machina text-[#0038FF] text-[32px] sm:text-[40px] xl:ml-0 xl:text-[64px]">
          About
        </h2>
        <img
          src="images/Frame.svg"
          alt="venus"
          className="w-24 sm:w-[140px] xl:w-[335px]"
        />
        <h3 className="mt-6 text-white font-machina text-[11px] min-[450px]:text-[14px] sm:text-[17px] md:text-2xl xl:max-w-[407px] xl:mt-8">
          Different types of innovative services are provided{" "}
          <span className="font-extrabold">here</span>.
        </h3>
        <p className="mt-3 mb-3 text-[#7C7C7C] font-grotesk text-[8px] min-[450px]:text-[12px] md:text-sm xl:max-w-[378px] xl:mt-8 xl:mb-10">
          The best infrastructures helps you provide your customers the best
          services in a best way.
        </p>
        <Button px="35px" py="14px" border="#fafafa7f">
          <span className="text-[10px] md:text-[14px]">Read more . . .</span>
        </Button>
      </div>
      <div className="justify-self-start">
        <img
          src="images/humangif.gif"
          alt="huamngif"
          className="max-w-[508px] max-h-[508px] object-contain w-full h-auto"
        />
      </div>
    </div>
  );
}

export default AboutVenus;
